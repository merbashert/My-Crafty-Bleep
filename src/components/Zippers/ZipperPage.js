import React, { useState, useEffect, useCallback } from 'react'
import ZipperList from '../Zippers/ZipperList'
import ZipperForm from './ZipperForm'
import Modal from 'react-bootstrap/Modal';
import { apiGet } from '../../api'


import './Zippers.css';

const ZipperPage = props => {
    const[zippers, setZippers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const sizeList = [7,9,12,14,18,20,22]

    const fetchZippers = useCallback(async () => {
      setIsLoading(true)
      await apiGet(`${props.baseUrl}/zippers`, 'Unable to load zippers')
      .then(jData => {
          setZippers(jData)
      }).catch(err=>console.log(err))
      .finally(() => {
          setIsLoading(false)
      })
    }, [props.baseUrl])

    const handleClose = (e) => {
        props.setShow(false)
    }

    const handleShow = (e) => {
        props.setShow(true)
    }

    useEffect(() => {
        fetchZippers()
    }, [fetchZippers])


    return (
        <div className = 'zipper-page'>

            <>
            <Modal show={props.show} onHide={handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Zipper</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='add-form'>
                        <ZipperForm setZippers={setZippers} handleClose={handleClose} baseUrl={props.baseUrl}/>
                    </div>
                </Modal.Body>
            </Modal>
            </>

            <div id='add-box'>
                <button onClick={() => handleShow()} id = 'add-zipper'>Add New Zipper</button>
                <button onClick={() => handleShow()} id = 'add-zipper-small'>+</button>
            </div>

            {isLoading ?
                <h1 className='loading'>Loading...</h1>
                :
                zippers.length > 0 ?
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
                        <h1 className='loading'>No zippers found.</h1>


                    }


                </div>

            )
        }

        export default ZipperPage
