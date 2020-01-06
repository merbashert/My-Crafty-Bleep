import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const RandomForm = props =>  {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [box_number, setBox_Number] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const boxinfo = {
            name:name,
            details:details,
            box_number:box_number
        }
        props.handleCreateRandom(boxinfo);
        props.handleClose()
        setName('')
        setDetails('')
        setBox_Number('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
        Item:
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value.toLowerCase())} required/>
        </label>
        <label>
        Details(if any):
        <input type="text" id="details" value={details} onChange={e => setDetails(e.target.value)}/>
        </label>
        <label id="random-form">
        Box #:
        <select value={box_number} onChange={e => setBox_Number(e.target.value)} id="box_number" className='dropdown' required>
        <option value=""></option>
        <option value="1">Box 1</option>
        <option value="2">Box 2</option>
        <option value="3">Box 3</option>
        </select>
        </label><br/>
        <Button type="submit" onClick={props.handleClose}>Put in the Box</Button>
        <Button onClick={props.handleClose}>Cancel</Button>
        </form>
    )
}


export default RandomForm
