import React, { useState, useEffect } from 'react'
import ZipperList from '../Zippers/ZipperList'

import './Zippers.css';

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
            {sizeList.map((size, i) => {
                return (
                    <ZipperList
                        zipperSize = {size}
                        key={i}
                        zippers = {zippers}
                        setZippers = {setZippers}
                        baseUrl={props.baseUrl}
                        />)
                    })}
                </div>
            )
        }

        export default ZipperPage
