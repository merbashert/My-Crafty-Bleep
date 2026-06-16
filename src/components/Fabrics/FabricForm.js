import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { apiPost } from '../../api'
import { fabricColors } from '../../constants'

const FabricForm = props => {
    const [length, setLength] = useState('')
    const [main_color, setMain_Color] = useState('')
    const [tags, setTags] = useState('')
    const [picture, setPicture] = useState('')
    const colors = ['', ...fabricColors]

    const handleSubmit = (e) => {
        e.preventDefault()
        const fabricinfo = {
            length:length,
            main_color:main_color,
            tags:tags,
            picture: picture
        }
        handleCreateFabric(fabricinfo)
        .then(() => {
            props.handleClose()
            setLength('')
            setMain_Color('')
            setTags('')
            setPicture('')
        })
        .catch(err=>console.log(err))
    }

    const handleCreateFabric = (createData) => {
        return apiPost(`${props.baseUrl}/fabrics`, createData, 'Unable to create fabric')
        .then(json => {
            props.setFabrics(json)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
        Length:
        <input type="text" placeholder="Length" id="length" value={length} onChange={e => setLength(e.target.value)} required/>
        </label>

        <label id="main_color">
        Main Color:
        <select value={main_color} onChange={e => setMain_Color(e.target.value)} id="main_color" className='dropdown' required>
        {colors.map((color, i) => {
            return <option key = {i} value={color}>{color}</option>
        })}
        </select>
        </label>
        <label>
        Tags:
        <input type="text" placeholder="Tags" id="tags" value={tags} onChange={e => setTags(e.target.value)}/>
        </label>
        <label id="picture">
        Picture:
        <input type="text" placeholder='Picture URL' id="picture" value={picture} onChange={e => setPicture(e.target.value)} required/>
        </label>
        <Button type="submit">Add to Fabric Stash</Button>
        <Button onClick={props.handleClose}>Cancel</Button>
        </form>
    )
}


export default FabricForm
