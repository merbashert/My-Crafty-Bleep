import React, { useState, useEffect, useCallback } from 'react'


import Needle from './Needles';

import './Needles.css'

const NeedlePage= props => {
    const [needles, setNeedles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchNeedle = useCallback(() => {
        setIsLoading(true)
        fetch(`${props.baseUrl}/needles`)
        .then(data => data.json())
        .then(jData => {
            setNeedles(jData)
        }).catch(err=>console.log(err))
        .finally(() => {
            setIsLoading(false)
        })
    }, [props.baseUrl])

    const handleUpdateNeedle = (updateData) => {
        return fetch(`${props.baseUrl}/needles/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedNeedle => {
            if (!updatedNeedle.ok) {
                throw new Error('Unable to update needle')
            }
            fetchNeedle()
        })
    }

    useEffect(() => {
        fetchNeedle()
    }, [fetchNeedle])

    return (


        <div className = 'needle-page'>
            {isLoading ?
                <h1 className='loading'>Loading...</h1>
                :
                needles.length > 0 ?
                <div className = "needles">
                    {needles.map((needleData) => (
                        <Needle
                            key={needleData.id}
                            needleData={needleData}
                            handleUpdateNeedle={handleUpdateNeedle}
                            />
                    ))}
                </div>
                :
                <h1 className='loading'>No needles found.</h1>

            }

        </div>
    )
}

export default NeedlePage
