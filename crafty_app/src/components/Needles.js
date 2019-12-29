import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import NeedleEdit from './NeedleEdit'
import yarnball from '../assets/favicon-32x32.png'


const Needles = props => {

    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = (e) => {
        setShow(true)
    }

    return (
        <React.Fragment>
        <div className = "needle-box">
        {props.needleData.size}
        <table>
        <thead></thead>
        <tbody>
        <tr>
        <td>Straight</td>
        <td>{(props.needleData.straight==='1')? <img src={yarnball} alt='yarnball'/> : null}</td>
        </tr>
        <tr>
        <td>Circular</td>
        <td>{(props.needleData.circular==='1')? <img src={yarnball} alt='yarnball'/> : null}</td>
        </tr>
        <tr>
        <td>Double-point</td>
        <td>{(props.needleData.doublepoint==='1')? <img src={yarnball} alt='yarnball'/> : null}</td>
        </tr>
        </tbody>
        </table>
        <p className="btn btn-sm btn-primary" onClick={handleShow}>
        Edit
        </p>
        <>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <NeedleEdit needleData={props.needleData} handleUpdateNeedle={props.handleUpdateNeedle} handleClose={handleClose}/>
        </Modal.Body>
        </Modal>
        </>
        <p onClick={() => {
            props.handleDeleteNeedle(props.needleData.id)
        }}>delete</p>

        </div>
        <br/>
        </React.Fragment>
    )
}

export default Needles
