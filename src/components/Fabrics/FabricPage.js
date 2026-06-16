import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Modal from 'react-bootstrap/Modal';

import FabricForm from './FabricForm'
import Fabric from './Fabrics'
import { apiDelete, apiGet } from '../../api'
import { fabricColors } from '../../constants'

import './Fabrics.css';

const FabricPage = props => {

    const [fabrics, setFabrics] = useState([])
    const [fabricTagFilter, setFabricTagFilter] = useState('')
    const [mainColorFilter, setMainColorFilter] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [loadError, setLoadError] = useState('')
    const colors = ['', ...fabricColors]


    const handleTagFilterChange = (e) => {
        setFabricTagFilter(e.target.value)
        setMainColorFilter('')
    }

    const handleMainColorFilterChange = (e) => {
        setMainColorFilter(e.target.value)
        setFabricTagFilter('')
    }

    const reset = () => {
        setFabricTagFilter('')
        setMainColorFilter('')
    }

    const fetchFabric = useCallback(async () => {
      setIsLoading(true)
      setLoadError('')
      await apiGet(`${props.baseUrl}/fabrics`, 'Unable to load fabrics')
      .then(jData => {
          setFabrics(jData)
      }).catch(err=>{
          console.log(err)
          setLoadError(err.message)
      })
      .finally(() => {
          setIsLoading(false)
      })
    }, [props.baseUrl])



    const handleDeleteFabric = (id) => {
        apiDelete(`${props.baseUrl}/fabrics/${id}`, 'Unable to delete fabric')
        .then(json => {
            setFabrics(currentFabrics => currentFabrics.filter(fabric => fabric.id !== id))
        }).catch(err=>console.log(err))
    }



    useEffect(() => {
        fetchFabric()
    }, [fetchFabric])

    const fabricTags = useMemo(() => {
        return [...new Set(fabrics.map(fabric=>fabric.tags))]
    }, [fabrics])

    const visibleFabrics = useMemo(() => fabrics.filter(fabric=>{
        return fabricTagFilter === '' && mainColorFilter === ''
            ? true
            : fabric.tags === fabricTagFilter || fabric.main_color === mainColorFilter
    }), [fabrics, fabricTagFilter, mainColorFilter])

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
                    <select value = {fabricTagFilter} onChange={handleTagFilterChange} className='dropdown'>
                        <option></option>
                        {fabricTags.filter(fabricTags => {return fabricTags != null}).map((fabricData, i) => {
                            return <option key = {i}>{fabricData}</option>
                        })}
                    </select>
                </label>


                <label htmlFor="fabric-main-color-filter">
                    Main Color
                    <select id="fabric-main-color-filter" value = {mainColorFilter} onChange={handleMainColorFilterChange} className='dropdown'>
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
                loadError
                ?
                <h1 className='fabric-loading'>{loadError}</h1>
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
