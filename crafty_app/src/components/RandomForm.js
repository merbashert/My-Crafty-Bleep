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
        <input type="text" placeholder="Item" id="name" value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>
        Details(if any):
        <input type="text" placeholder="Details(if any)" id="details" value={details} onChange={e => setDetails(e.target.value)}/>
        </label>
        <label id="random-form">
        Box #:
        <input type="number" placeholder="Box #" id="box_number" value={box_number} onChange={e => setBox_Number(e.target.value)}></input>
        </label>
        <input type="submit" value="Put in the Box"/>
        </form>
    )
}


export default RandomForm
