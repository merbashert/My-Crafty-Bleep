import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import FabricEdit from './FabricEdit'

const Fabrics = props => {

    const [show, setShow] = useState(false);
    const [fabricShow, setFabricShow] = useState(false)

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = (e) => {
        setShow(true)
    }

    const handleShowFabric = (e) => {
        setFabricShow(true)
    }

    const handleCloseFabric = (e) => {
        setFabricShow(false)
    }

    const useStyle = {
        backgroundImage: `url(${props.fabricData.picture})`,
        backgroundSize: 'contain'
    }

    return (
        <React.Fragment>
        <div className="fabric-box">
        <img src={props.fabricData.picture} className="fabric-pic" alt="fabric" onClick={handleShowFabric}/>

        <>
        <Modal show={fabricShow} onHide={handleCloseFabric} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
        <Modal.Body>
    {    /* <div className = 'close-button' onClick={handleCloseFabric}>Close</div> */}
        <img src={props.fabricData.picture} className='show-fabric'/>
        </Modal.Body>
        </Modal>
        </>

        <div className='fabric-length'>{props.fabricData.length} yards</div>
        <div className='fabric-data'>
        {props.fabricData.tags?<div className='fabric-tags' onClick={() => {
            props.setFabricTagFilter(props.fabricData.tags)
        }}>{props.fabricData.tags}</div>:<div></div>}

        <>
        <Modal show={show} onHide={handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
        <Modal.Header closeButton>
        <Modal.Title>Edit Fabric</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={useStyle}>

        <FabricEdit fabricData={props.fabricData} handleUpdateFabric={props.handleUpdateFabric} handleClose={handleClose}/>
        </Modal.Body>
        </Modal>
        </>

        <div className='fabric-buttons'>
        <p onClick={handleShow}>
        <span className="lnr lnr-pencil"></span>
        </p>
        <p onClick={() => {
            if (window.confirm('Definitely delete?')) props.handleDeleteFabric(props.fabricData.id)
        }}><span className="lnr lnr-trash"></span></p>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Fabrics
