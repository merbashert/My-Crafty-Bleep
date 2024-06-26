import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const RandomEdit = props => {
    const [name, setName] = useState(props.randomData.name)
    const [details, setDetails] = useState(props.randomData.details)
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
        handleUpdateRandom(boxinfo)
        setName('')
        setDetails('')
        setBox_Number('')
        setId('')
    }

    const handleUpdateRandom = (updateData) => {
        fetch(`https://meredithbashert.com/mycraftybleep-backend/randoms/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedRandom => {
            props.fetchRandom()
        }).catch(err=>console.log(err))
    }

    return (
        <div>
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
                    <select value={box_number} onChange={e => setBox_Number(e.target.value)} id="box_number" className='dropdown' required>
                        <option box_number=""></option>
                        <option box_number="1">1</option>
                        <option box_number="2">2</option>
                        <option box_number="3">3</option>
                        <option box_number="4">4</option>
                        <option box_number="5">5</option>
                    </select>
                </label>
                <br/>
                <Button type="submit" onClick={props.handleClose}>Apply Changes</Button>
                <Button onClick={props.handleClose}>Cancel</Button>
            </form>
        </div>
    )

}


export default RandomEdit
