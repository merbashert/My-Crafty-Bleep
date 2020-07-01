import React, { useState, useEffect } from 'react'
import Zipper from './Zipper'
import ZipperForm from './ZipperForm'
import ZipperList from './ZipperList'


const ZipperPage = props => {
    const[zippers, setZippers] = useState([])
    const sizeList = [7,9,12,14,18,20,22]

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
        <div className = "zipper-container">
            {sizeList.map((size) => {
                return (
                    <ZipperList
                        zipperSize = {size}
                        zippers = {zippers}
                        setZippers = {setZippers}
                        baseUrl={props.baseUrl}
                        />)
                    })}
                </div>
            )
        }

        export default ZipperPage
