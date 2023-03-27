
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import RandomEdit from './RandomEdit'

import './Randoms.css';

const Random = props => {

    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = (e) => {
        setShow(true)
    }

    const handleUpdateRandom = (updateData) => {
        fetch(`https://meredithbashert.com/mycraftybleep-backend/randoms/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedRandom => {
            props.fetchRandom()
        }).catch(err=>console.log(err))
    }


    return (

        <tr className='random-row'>
            <td className='random-name'>{props.randomData.name}</td>
            <td className='random-details'>{props.randomData.details}</td>
            <td className = 'random-box'>Box {props.randomData.box_number}</td>
            <td className='random-buttons'>

                <div onClick={() => props.handleShow()} id = 'edit-random'>Edit</div>
                <div onClick={() => props.handleShow()} id = 'edit-random-small'><span className="lnr lnr-pencil"></span></div>
                <>


                <Modal show={show} onHide={handleClose} style={{backgroundColor:'rgb(255, 255, 255, .4)'}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Random Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RandomEdit randomData={props.randomData} handleUpdateRandom={handleUpdateRandom} handleClose={handleClose}/>
                    </Modal.Body>
                </Modal>
                </>



            <div onClick={(e) => {if (window.confirm(`Definitely delete ${props.randomData.name}?`)) props.handleDeleteRandom(props.randomData.id)}} id = "delete-random">Delete</div>
            <div onClick={(e) => {if (window.confirm(`Definitely delete ${props.randomData.name}?`)) props.handleDeleteRandom(props.randomData.id)}} id = "delete-random-small"><span className="lnr lnr-trash"></span></div>
        </td>
    </tr>
)
}


export default Random