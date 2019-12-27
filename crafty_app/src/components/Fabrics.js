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
        <h5>Length:{props.fabricData.length}</h5>
        <h5>Tags: {props.fabricData.tags}</h5>

        <p className="btn btn-sm btn-primary" onClick={handleShow}>
          Edit
        </p>
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

        <p onClick={() => {
            props.handleDeleteFabric(props.fabricData.id)
        }}>Delete</p>
        </div>
      </React.Fragment>
    )
  }

export default Fabrics
