
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import RandomEdit from './RandomEdit'


const Random = props => {

    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = (e) => {
        setShow(true)
    }

    return (

        <tr className='random-row'>
        <td className='random-name'>{props.randomData.name}</td>
        <td className='random-details'>{props.randomData.details}</td>
        <td className='random-buttons'>
        <p className="btn" onClick={handleShow}>
        Edit
        </p>
        <>


        <Modal show={show} onHide={handleClose} style={{backgroundColor:'rgb(255, 255, 255, .4)'}}>
        <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <RandomEdit randomData={props.randomData} handleUpdateRandom={props.handleUpdateRandom} handleClose={handleClose}/>
        </Modal.Body>
        </Modal>
        </>

        <p className='btn' onClick={(e) => {if (window.confirm('Definitely delete?')) props.handleDeleteRandom(props.randomData.id)}}>Delete</p></td>
        </tr>
    )
}


export default Random
