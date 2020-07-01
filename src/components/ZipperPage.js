import React, { useState, useEffect } from 'react'
import Zipper from './Zipper'
import ZipperForm from './ZipperForm'
import ZipperList from './ZipperList'


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
            <ZipperList
                zipperSize = {7}
                zippers = {zippers}
                handleCreateZipper = {handleCreateZipper}
                handleDeleteZipper = {handleDeleteZipper}
                />

            <ZipperList
                zipperSize = {9}
                zippers = {zippers}
                handleDeleteZipper = {handleDeleteZipper}
                />

            <ZipperList
                zipperSize = {12}
                zippers = {zippers}
                handleDeleteZipper = {handleDeleteZipper}
                />


            <ZipperList
                zipperSize = {14}
                zippers = {zippers}
                handleDeleteZipper = {handleDeleteZipper}
                />

            <ZipperList
                zipperSize = {18}
                zippers = {zippers}
                handleDeleteZipper = {handleDeleteZipper}
                />

            <ZipperList
                zipperSize = {20}
                zippers = {zippers}
                handleDeleteZipper = {handleDeleteZipper}
                />

            <ZipperList
                zipperSize = {22}
                zippers = {zippers}
                handleDeleteZipper = {handleDeleteZipper}
                />
        </div>
    )
}

export default ZipperPage
