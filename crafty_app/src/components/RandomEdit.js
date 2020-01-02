import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const RandomEdit = props => {
    const [name, setName] = useState(props.randomData.name)
    const [details, setDetails] = useState(props.randomData.details?props.randomData.details:'')
    const [box_number, setBox_Number] = useState(props.randomData.box_number)
    const [id, setId] = useState(props.randomData.id)

    const handleSubmit = (e) => {
        e.preventDefault()
        const boxinfo = {
            name:name,
            details:details,
            box_number:box_number,
            id:id
        }
        props.handleUpdateRandom(boxinfo)
        setName('')
        setDetails('')
        setBox_Number('')
        setId('')
        }




console.log(details);
        return (
            <form onSubmit={handleSubmit}>
            <label>
            Item:
            <input type="text" placeholder="Item" id="name" value={name} onChange={e => setName(e.target.value)}/>
            </label><br/>
            <label>
            Details(if any):
            <input
            type="text"
            placeholder="Details(if any)"
            id="details"
            value={details}
            onChange={e => setDetails(e.target.value)}/>
            </label><br/>
            <label id="random-form">
            Box #:
            <input type="number" placeholder="Box #" id="box_number" value={box_number} onChange={e => setBox_Number(e.target.value)}/>
            </label>
            <br/>
            <input type="submit" value="Apply changes" onClick={props.handleClose} className='add-button'/>
            <Button className="add-button" onClick={props.handleClose}>
              Cancel
            </Button>
            </form>
        )

}


export default RandomEdit
