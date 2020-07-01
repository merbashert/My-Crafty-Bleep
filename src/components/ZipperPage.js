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



    useEffect(() => {
        fetchZippers();
    }, [])


    return (
        <div className = 'zipper-container'>
            <ZipperList
                zipperSize = {7}
                zippers = {zippers}
                setZippers = {setZippers}
                />

            <ZipperList
                zipperSize = {9}
                zippers = {zippers}
                setZippers = {setZippers}
                />

            <ZipperList
                zipperSize = {12}
                zippers = {zippers}
                setZippers = {setZippers}
                />


            <ZipperList
                zipperSize = {14}
                zippers = {zippers}
                setZippers = {setZippers}
                />

            <ZipperList
                zipperSize = {18}
                zippers = {zippers}
                setZippers = {setZippers}
                />

            <ZipperList
                zipperSize = {20}
                zippers = {zippers}
                setZippers = {setZippers}
                />

            <ZipperList
                zipperSize = {22}
                zippers = {zippers}
                setZippers = {setZippers}
                />
        </div>
    )
}

export default ZipperPage
