import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import NeedleEdit from './NeedleEdit';
import yarnball from '../../assets/favicon-32x32.png'


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

                <h1>{props.needleData.size}</h1>
                <Table className='needle-table'>

                    <tbody>
                        <tr>
                            <td>Straight</td>
                            <td className='yarnball'>{(props.needleData.straight==='1')? <img src={yarnball} alt='yarnball'/> : null}</td>
                        </tr>
                        <tr>
                            <td>Circular</td>
                            <td className='yarnball'>{(props.needleData.circular==='1')? <img src={yarnball} alt='yarnball'/> : null}</td>
                        </tr>
                        <tr>
                            <td>Double-point</td>
                            <td className='yarnball'>{(props.needleData.doublepoint==='1')? <img src={yarnball} alt='yarnball'/> : null}</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
                <p className="btn" onClick={handleShow}>
                    Edit
                </p>
                <>


                <Modal show={show} onHide={handleClose} size='sm' style={{backgroundColor:'rgb(255, 255, 255, .4)'}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Size {props.needleData.size}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NeedleEdit needleData={props.needleData} handleUpdateNeedle={props.handleUpdateNeedle} handleClose={handleClose}/>
                    </Modal.Body>
                </Modal>
                </>
        </div>
        <br/>
    </React.Fragment>
)
}

export default Needles
