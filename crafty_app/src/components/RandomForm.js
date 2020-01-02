import React, { useState } from 'react'

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
        setName('')
        setDetails('')
        setBox_Number('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
        Item:
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required/>
        </label>
        <label>
        Details(if any):
        <input type="text" id="details" value={details} onChange={e => setDetails(e.target.value)}/>
        </label>
        <label id="random-form">
        Box #:
        <input type="number" id="box_number" value={box_number} onChange={e => setBox_Number(e.target.value)} required/>
        </label>
        <input type="submit" value="Put in the Box" className='add-button'/>
        </form>
    )
}


export default RandomForm
