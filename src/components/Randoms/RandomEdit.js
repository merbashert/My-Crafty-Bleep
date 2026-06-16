import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { apiPut } from '../../api'

const RandomEdit = props => {
    const [name, setName] = useState(props.randomData.name)
    const [details, setDetails] = useState(props.randomData.details)
    const [box_number, setBox_Number] = useState(props.randomData.box_number)

    const handleSubmit = (e) => {
        e.preventDefault()
        const boxinfo = {
            name:name,
            details:details,
            box_number:box_number,
            id: props.randomData.id
        }
        handleUpdateRandom(boxinfo)
    }

    const handleUpdateRandom = (updateData) => {
        apiPut(`${props.baseUrl}/randoms/${updateData.id}`, updateData, 'Unable to update random item')
        .then(response => {
            props.fetchRandom()
            props.handleClose()
        }).catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="edit-random-name">
                    Item:
                    <input type="text" placeholder="Item" id="edit-random-name" value={name} onChange={e => setName(e.target.value)}/>
                </label><br/>
                <label htmlFor="edit-random-details">
                    Details(if any):
                    <input
                        type="text"
                        placeholder="Details(if any)"
                        id="edit-random-details"
                        value={details}
                        onChange={e => setDetails(e.target.value)}/>
                </label><br/>
                <label htmlFor="edit-random-box-number">
                    Box #:
                    <select value={box_number} onChange={e => setBox_Number(e.target.value)} id="edit-random-box-number" className='dropdown' required>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </label>
                <br/>
                <Button type="submit">Apply Changes</Button>
                <Button onClick={props.handleClose}>Cancel</Button>
            </form>
        </div>
    )

}


export default RandomEdit
