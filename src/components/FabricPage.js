import React, { useState, useEffect } from 'react'

import FabricForm from './FabricForm'
import Fabric from './Fabrics'



const FabricPage = props => {

    const[fabrics, setFabrics] = useState([])
    const [fabricTagFilter, setFabricTagFilter] = useState('')
    const [mainColorFilter, setMainColorFilter] = useState('')

    const handleChange = (e) => {
        setFabricTagFilter(e.target.value)
        setMainColorFilter(e.target.value)
    }

    // const handleChangeTag = (e) => {
    //     setFabricTagFilter(e.target.value)
    // }
    //
    // const handleChangeColor = (e) => {
    //     setMainColorFilter(e.target.value)
    // }

    const fetchFabric = () => {
        fetch(`${props.baseUrl}/fabrics`)
        .then(data => data.json())
        .then(jData => {
            setFabrics(jData)
        }).catch(err=>console.log(err))
    }

    const handleCreateFabric = (createData) => {
        fetch(`${props.baseUrl}/fabrics`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdFabric => {
            return createdFabric.json()
        })
        .then(json => {
            setFabrics(json)
        })
        .catch(err=>console.log(err))
    }

    const handleUpdateFabric = (updateData) => {
        fetch(`${props.baseUrl}/fabrics/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedFabric => {
            fetchFabric()
        }).catch(err=>console.log(err))
    }

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
        fetchFabric();
    }, [])

    return (
        <div>
        <div className = 'add-form'>

        <FabricForm
        handleCreateFabric={handleCreateFabric}
        handleUpdateFabric={handleUpdateFabric}
        formInputs={props.formInputs}
        />
        </div>

        <div className='fabric-filter'>
        <div className='fabric-filter-form'>
        <label htmlFor="filter">Search for tag/color</label>
        <input type="text" id="filter"
        value={fabricTagFilter}
        onChange={handleChange} className='filter-input'/>


        <label id="main_color">
        Main Color
        <select value={mainColorFilter} onChange={handleChange} id="main_color" className='dropdown'>
        <option main_color="all">all</option>
        <option main_color="red">red</option>
        <option main_color="orange">orange</option>
        <option main_color="yellow">yellow</option>
        <option main_color="green">green</option>
        <option main_color="blue">blue</option>
        <option main_color="purple">purple</option>
        <option main_color="pink">pink</option>
        <option main_color="brown">brown</option>
        <option main_color="black">black</option>
        <option main_color="white">white</option>
        </select>
        </label>
        </div>

        {
            (fabricTagFilter==='' || mainColorFilter==='all')
            ?
            <div className='fabric-container'>
            {fabrics.map((fabricData) => (
                <Fabric
                key={fabricData.id}
                fabricData={fabricData}
                handleDeleteFabric={handleDeleteFabric}
                handleUpdateFabric={handleUpdateFabric}
                />
            ))}</div>
            :
            <div className='fabric-container'>
            {fabrics.filter(fabric=>{
                return fabric.tags === fabricTagFilter || fabric.main_color === mainColorFilter
            }).map((fabricData) => (
                <Fabric
                key={fabricData.id}
                fabricData={fabricData}
                handleDeleteFabric={handleDeleteFabric}
                handleUpdateFabric={handleUpdateFabric}
                />
            ))}
            </div>
        }
        </div>
            </div>
    )//end of return
}

export default FabricPage
