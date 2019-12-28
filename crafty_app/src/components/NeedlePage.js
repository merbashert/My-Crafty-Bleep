import React, { useState, useEffect } from 'react'

import NeedleForm from './NeedleForm'
import Needle from './Needles'



const NeedlePage= props => {
    const [needles, setNeedles] = useState([])

    const fetchNeedle = () => {
        fetch(`${props.baseUrl}/needles`)
        .then(data => data.json())
        .then(jData => {
            setNeedles(jData)
        }).catch(err=>console.log(err))
    }

    const handleCreateNeedle = (createData) => {
        fetch(`${props.baseUrl}/needles`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdNeedle => {
            return createdNeedle.json()
        })
        .then(json => {
            setNeedles(json)
        })
        .catch(err=>console.log(err))
    }

    const handleUpdateNeedle = (updateData) => {
        fetch(`${props.baseUrl}/needles/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedNeedle => {
            fetchNeedle()
        }).catch(err=>console.log(err))
    }

    const handleDeleteNeedle = (id) => {
        fetch(`${props.baseUrl}/needles/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            setNeedles(needles.filter(needle => needle.id !== id))
        }).catch(err=>console.log(err))
    }
    useEffect(() => {
        fetchNeedle();
    }, [])


    return (
        <React.Fragment>

        <div className = "needles">
        {needles.map((needleData) => (
            <Needle
            key={needleData.id}
            needleData={needleData}
            handleDeleteNeedle={handleDeleteNeedle}
            handleUpdateNeedle={handleUpdateNeedle}
            />
        ))}
        </div>

        </React.Fragment>
    )
}

export default NeedlePage
