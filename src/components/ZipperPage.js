import React, { useState, useEffect } from 'react'
import Zipper from './Zipper'
import ZipperForm from './ZipperForm'


const ZipperPage = props => {
    const[zippers, setZippers] = useState([])

    const fetchZippers = () => {
        fetch(`${props.baseUrl}/zippers`)
        .then(data => data.json())
        .then(jData => {
            setZippers(jData)
        }).catch(err=>console.log(err))
    }

    const handleCreateZipper = (createData) => {
        fetch(`${props.baseUrl}/zippers`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdZipper => {
            return createdZipper.json()
        })
        .then(json => {
            setZippers(json)
        })
        .catch(err=>console.log(err))
    }

    const handleUpdateZipper = (updateData) => {
        fetch(`${props.baseUrl}/zippers/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedZipper => {
            fetchZippers()
        }).catch(err=>console.log(err))
    }

    const handleDeleteZipper = (id) => {
        fetch(`${props.baseUrl}/zippers/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            setZippers(zippers.filter(zipper => zipper.id !== id))
        }).catch(err=>console.log(err))
    }


    useEffect(() => {
        fetchZippers();
    }, [])


    return (
        <div className = 'zipper-container'>
            <div className = "zipper-size">
                <h3>7 Inches</h3>
                {zippers.filter(zipper=>{
                    return zipper.size === 7
                }).map((zipperData) => (
                    <Zipper
                        key={zipperData.id}
                        zipperData={zipperData}
                        handleDeleteZipper={handleDeleteZipper}
                        />
                ))}
                <ZipperForm handleCreateZipper={handleCreateZipper}
                    zipperSize='7' />

            </div>

            <div className = "zipper-size">
                <h3>9 Inches</h3>
                {zippers.filter(zipper=>{
                    return zipper.size === 9
                }).map((zipperData) => (
                    <Zipper
                        key={zipperData.id}
                        zipperData={zipperData}
                        handleDeleteZipper={handleDeleteZipper}
                        />
                ))}
                <ZipperForm handleCreateZipper={handleCreateZipper}
                    zipperSize='9' />
            </div>
            <div className = "zipper-size">
                <h3>12 Inches</h3>
                {zippers.filter(zipper=>{
                    return zipper.size === 12
                }).map((zipperData) => (
                    <Zipper
                        key={zipperData.id}
                        zipperData={zipperData}
                        handleDeleteZipper={handleDeleteZipper}
                        />
                ))}
                <ZipperForm handleCreateZipper={handleCreateZipper}
                    zipperSize='12' />
            </div>
            <div className = "zipper-size">
                <h3>14 Inches</h3>
                {zippers.filter(zipper=>{
                    return zipper.size === 14
                }).map((zipperData) => (
                    <Zipper
                        key={zipperData.id}
                        zipperData={zipperData}
                        handleDeleteZipper={handleDeleteZipper}
                        />
                ))}
                <ZipperForm handleCreateZipper={handleCreateZipper}
                    zipperSize='14' />
            </div>
            <div className = "zipper-size">
                <h3>18 Inches</h3>
                {zippers.filter(zipper=>{
                    return zipper.size === 18
                }).map((zipperData) => (
                    <Zipper
                        key={zipperData.id}
                        zipperData={zipperData}
                        handleDeleteZipper={handleDeleteZipper}
                        />
                ))}
                <ZipperForm handleCreateZipper={handleCreateZipper}
                    zipperSize='18' />
            </div>
            <div className = "zipper-size">
                <h3>20 Inches</h3>
                {zippers.filter(zipper=>{
                    return zipper.size === 20
                }).map((zipperData) => (
                    <Zipper
                        key={zipperData.id}
                        zipperData={zipperData}
                        handleDeleteZipper={handleDeleteZipper}
                        />
                ))}
                <ZipperForm handleCreateZipper={handleCreateZipper}
                    zipperSize='20' />
            </div>

            <div className = "zipper-size">
                <h3>22 Inches</h3>
                {zippers.filter(zipper=>{
                    return zipper.size === 22
                }).map((zipperData) => (
                    <Zipper
                        key={zipperData.id}
                        zipperData={zipperData}
                        handleDeleteZipper={handleDeleteZipper}
                        />
                ))}
                <ZipperForm handleCreateZipper={handleCreateZipper}
                    zipperSize='22' />
            </div>
        </div>
    )
}

export default ZipperPage
