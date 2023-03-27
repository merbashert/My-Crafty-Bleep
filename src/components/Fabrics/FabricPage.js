import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';

import FabricForm from './FabricForm'
import Fabric from './Fabrics'

import './Fabrics.css';

const FabricPage = props => {

    const[fabrics, setFabrics] = useState([])
    const[fabricTags, setFabricTags] = useState([])
    const [fabricTagFilter, setFabricTagFilter] = useState('')
    const [mainColorFilter, setMainColorFilter] = useState('')
    const colors = ['','red','orange','yellow','green', 'blue', 'purple', 'pink', 'brown', 'black', 'white']


    const handleChange = (e) => {
        setFabricTagFilter(e.target.value)
        setMainColorFilter(e.target.value)
    }

    const reset = () => {
        setFabricTagFilter('')
        setMainColorFilter('')
    }

    const fetchFabric = () => {
        fetch(`https://mycraftybleep-backend.meredithbashert.com/fabrics`)
        .then(data => data.json())
        .then(jData => {
            setFabrics(jData)
        }).catch(err=>console.log(err))
    }



    const handleDeleteFabric = (id) => {
        fetch(`https://mycraftybleep-backend.meredithbashert.com/fabrics/${id}`, {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setFabricTags([...new Set(fabrics.map(fabrics=>fabrics.tags))]);
    }, [fabrics])

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
                (fabricTagFilter==='' && mainColorFilter==='' && fabrics.length > 0)
                ?
                <div className='fabric-container'>
                    {fabrics.map((fabricData) => (
                        <Fabric
                            key={fabricData.id}
                            fabricData={fabricData}
                            handleDeleteFabric={handleDeleteFabric}
                            setFabricTagFilter={setFabricTagFilter}
                            fetchFabric={fetchFabric}
                            />
                    ))}</div>
                    :
                    (fabrics.length > 0)
                    ?
                    <div className='fabric-container'>
                        {fabrics.filter(fabric=>{
                            return fabric.tags === fabricTagFilter || fabric.main_color === mainColorFilter
                        }).map((fabricData) => (
                            <Fabric
                                key={fabricData.id}
                                fabricData={fabricData}
                                handleDeleteFabric={handleDeleteFabric}
                                setFabricTagFilter={setFabricTagFilter}
                                fetchFabric={fetchFabric}
                                />
                        ))}
                    </div>
                    :
                    <h1 className='fabric-loading'>Loading...</h1>

                }
            </div>
        </div>
    )//end of return
}

export default FabricPage
