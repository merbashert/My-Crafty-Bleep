import React, { useState, useEffect, useCallback } from 'react'


import Needle from './Needles';
import { apiGet, apiPut } from '../../api'

import './Needles.css'

const NeedlePage= props => {
    const [needles, setNeedles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [loadError, setLoadError] = useState('')

    const fetchNeedle = useCallback(() => {
        setIsLoading(true)
        setLoadError('')
        apiGet(`${props.baseUrl}/needles`, 'Unable to load needles')
        .then(jData => {
            setNeedles(jData)
        }).catch(err=>{
            console.log(err)
            setLoadError(err.message)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [props.baseUrl])

    const handleUpdateNeedle = (updateData) => {
        return apiPut(`${props.baseUrl}/needles/${updateData.id}`, updateData, 'Unable to update needle')
        .then(updatedNeedle => {
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
                loadError ?
                <h1 className='loading'>{loadError}</h1>
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
