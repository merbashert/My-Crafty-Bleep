import React, { useState, useEffect } from 'react'


import Needle from './Needles';

import './Needles.css'

const NeedlePage= props => {
    const [needles, setNeedles] = useState([])

    const fetchNeedle = () => {
        fetch(`${props.baseUrl}/needles`)
        .then(data => data.json())
        .then(jData => {
            setNeedles(jData)
        }).catch(err=>console.log(err))
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

    useEffect(() => {
        fetchNeedle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (


        <div className = 'needle-page'>
            {needles.length > 0 ?
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
                <h1 className='loading'>Loading...</h1>

            }

        </div>
    )
}

export default NeedlePage
