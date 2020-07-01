import React, { useState, useEffect } from 'react'


import Needle from './Needles';


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
        fetchNeedle();
    }, [])

    return (


        <div className = 'needle-page'>
        <div className = "needles">
        {needles.map((needleData) => (
            <Needle
            key={needleData.id}
            needleData={needleData}
            handleUpdateNeedle={handleUpdateNeedle}
            />
        ))}
        </div>
        </div>
    )
}

export default NeedlePage
