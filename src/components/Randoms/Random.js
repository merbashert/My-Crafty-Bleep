
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import RandomEdit from './RandomEdit'

import './Randoms.css';

const Random = props => {

    const [show, setShow] = useState(false);
    const confirmDelete = () => {
        if (window.confirm(`Definitely delete ${props.randomData.name}?`)) {
            props.handleDeleteRandom(props.randomData.id)
        }
    }

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
            <td className = 'random-box'>Box {props.randomData.box_number}</td>
            <td className='random-buttons'>

                <>
                <Modal show={show} onHide={handleClose} style={{backgroundColor:'rgb(255, 255, 255, .4)'}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Random Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RandomEdit randomData={props.randomData} fetchRandom={props.fetchRandom} baseUrl={props.baseUrl} handleClose={handleClose}/>
                    </Modal.Body>
                </Modal>
                </>

            <button type="button" onClick={() => handleShow()} id = 'edit-random'>Edit</button>
            <button type="button" onClick={() => handleShow()} id = 'edit-random-small'><span className="lnr lnr-pencil"></span></button>

            <button type="button" onClick={confirmDelete} id = "delete-random">Delete</button>
            <button type="button" onClick={confirmDelete} id = "delete-random-small"><span className="lnr lnr-trash"></span></button>

        </td>
        </tr>
)
}


export default Random
