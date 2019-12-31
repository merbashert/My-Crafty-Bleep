import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import FabricEdit from './FabricEdit'

const Fabrics = props => {

    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = (e) => {
        setShow(true)
    }

    return (
        <React.Fragment>
        <div className="fabric-box">
        <img src={props.fabricData.picture} className="fabric-pic" alt="fabric"/>
        <div className='fabric-data'>
        <h5>{props.fabricData.length} yards</h5>

        <h5 className='fabric-tags'>{props.fabricData.tags}</h5>

        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FabricEdit fabricData={props.fabricData} handleUpdateFabric={props.handleUpdateFabric} handleClose={handleClose}/>
        </Modal.Body>
        </Modal>
        </>

        <div className='fabric-buttons'>
        <p onClick={handleShow}>
        <span className="lnr lnr-pencil"></span>
        </p>

        <p onClick={() => {
            props.handleDeleteFabric(props.fabricData.id)
        }}><span className="lnr lnr-trash"></span></p>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Fabrics
