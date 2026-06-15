import React, { useState, useEffect, useCallback } from 'react'
import Modal from 'react-bootstrap/Modal';

import FabricForm from './FabricForm'
import Fabric from './Fabrics'

import './Fabrics.css';

const FabricPage = props => {

    const[fabrics, setFabrics] = useState([])
    const[fabricTags, setFabricTags] = useState([])
    const [fabricTagFilter, setFabricTagFilter] = useState('')
    const [mainColorFilter, setMainColorFilter] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const colors = ['','red','orange','yellow','green', 'blue', 'purple', 'pink', 'brown', 'black', 'white']


    const handleChange = (e) => {
        setFabricTagFilter(e.target.value)
        setMainColorFilter(e.target.value)
    }

    const reset = () => {
        setFabricTagFilter('')
        setMainColorFilter('')
    }

    const fetchFabric = useCallback(async () => {
      setIsLoading(true)
      await fetch(`${props.baseUrl}/fabrics`)
      .then(data => data.json())
      .then(jData => {
          setFabrics(jData)
      }).catch(err=>console.log(err))
      .finally(() => {
          setIsLoading(false)
      })
    }, [props.baseUrl])



    const handleDeleteFabric = (id) => {
        fetch(`${props.baseUrl}/fabrics/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            setFabrics(fabrics.filter(fabric => fabric.id !== id))
        }).catch(err=>console.log(err))
    }



    useEffect(() => {
        fetchFabric()
    }, [fetchFabric])

    useEffect(() => {
        setFabricTags([...new Set(fabrics.map(fabric=>fabric.tags))]);
    }, [fabrics])

    const visibleFabrics = fabrics.filter(fabric=>{
        return fabricTagFilter === '' && mainColorFilter === ''
            ? true
            : fabric.tags === fabricTagFilter || fabric.main_color === mainColorFilter
    })

    return (
        <div>

            <>
            <Modal show={props.show} onHide={props.handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Fabric</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className = 'add-form'>
                        <FabricForm
                            handleClose={props.handleClose}
                            setFabrics={setFabrics}
                            baseUrl={props.baseUrl}
                            />
                    </div>

                </Modal.Body>
            </Modal>
            </>


        <div className='fabric-filter'>

            <div className='fabric-filter-form'>
                Filter By:
                <label id = "tag_filter">
                    Tag:
                    <select value = {fabricTagFilter} onChange={handleChange} className='dropdown'>
                        <option></option>
                        {fabricTags.filter(fabricTags => {return fabricTags != null}).map((fabricData, i) => {
                            return <option key = {i}>{fabricData}</option>
                        })}
                    </select>
                </label>


                <label id="main_color">
                    Main Color
                    <select value = {mainColorFilter} onChange={handleChange} className='dropdown'>
                        {colors.map((color, i) => {
                            return <option key = {i}>{color}</option>
                        })}
                    </select>
                </label>
                <button onClick={() => reset()} className='clear-fabric'>Clear Filters</button>
                <button onClick={() => props.handleShow()} className='add-fabric'>Add a New Fabric</button>
            </div>

            {
                isLoading
                ?
                <h1 className='fabric-loading'>Loading...</h1>
                :
                visibleFabrics.length > 0
                ?
                <div className='fabric-container'>
                    {visibleFabrics.map((fabricData) => (
                        <Fabric
                            key={fabricData.id}
                            fabricData={fabricData}
                            handleDeleteFabric={handleDeleteFabric}
                            setFabricTagFilter={setFabricTagFilter}
                            fetchFabric={fetchFabric}
                            baseUrl={props.baseUrl}
                            />
                    ))}</div>
                    :
                    <h1 className='fabric-loading'>No fabrics found.</h1>

                }
            </div>
        </div>
    )//end of return
}

export default FabricPage
