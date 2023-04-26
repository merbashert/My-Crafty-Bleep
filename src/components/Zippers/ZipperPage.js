import React, { useState, useEffect } from 'react'
import ZipperList from '../Zippers/ZipperList'
import ZipperForm from './ZipperForm'
import Modal from 'react-bootstrap/Modal';


import './Zippers.css';

const ZipperPage = props => {
    const[zippers, setZippers] = useState([])
    const sizeList = [7,9,12,14,18,20,22]

    const fetchZippers = () => {
        fetch(`https://mycraftybleep-backend.meredithbashert.com/zippers`)
        .then(data => data.json())
        .then(jData => {
            setZippers(jData)
        }).catch(err=>console.log(err))
    }


    const handleCreateZipper = (createData) => {
        fetch(`https://mycraftybleep-backend.meredithbashert.com/zippers`, {
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
            props.setZippers(json)
        })
        .catch(err=>console.log(err))
    }



    const handleClose = (e) => {
        props.setShow(false)
    }

    const handleShow = (e) => {
        props.setShow(true)
    }

    useEffect(() => {
        fetchZippers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className = 'zipper-page'>

            <>
            <Modal show={props.show} onHide={handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Zipper</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='add-form'>
                        <ZipperForm setZippers={setZippers} handleClose={handleClose}/>
                    </div>
                </Modal.Body>
            </Modal>
            </>

            <div id='add-box'>
                <button onClick={() => handleShow()} id = 'add-zipper'>Add New Zipper</button>
                <button onClick={() => handleShow()} id = 'add-zipper-small'>+</button>
            </div>

            {zippers.length > 0 ?
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
                        :
                        <h1 className='loading'>Loading...</h1>


                    }


                </div>

            )
        }

        export default ZipperPage
