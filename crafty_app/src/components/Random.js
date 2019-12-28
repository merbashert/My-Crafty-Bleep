
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

            <tr>
            <td className='random-name'>{props.randomData.name}</td>
            <td className='random-details'>{props.randomData.details}</td>
            <td>
            <p className="btn btn-sm btn-primary" onClick={handleShow}>
              Edit
            </p>
            <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <RandomEdit randomData={props.randomData} handleUpdateRandom={props.handleUpdateRandom} handleClose={handleClose}/>
         </Modal.Body>
      </Modal>
    </>
            </td>
            <td><p className="btn btn-sm btn-primary"  onClick={() => {
                props.handleDeleteRandom(props.randomData.id)
            }}>Delete</p></td>
            </tr>


        )

}


export default Random
