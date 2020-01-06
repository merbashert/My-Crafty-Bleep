import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const FabricForm = props => {
    const [length, setLength] = useState('')
    const [main_color, setMain_Color] = useState('')
    const [tags, setTags] = useState('')
    const [picture, setPicture] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const fabricinfo = {
            length:length,
            main_color:main_color,
            tags:tags,
            picture: picture
        }
        props.handleCreateFabric(fabricinfo);
        props.handleClose()
        setLength('')
        setMain_Color('')
        setTags('')
        setPicture('')
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
        <option main_color=""></option>
        <option main_color="red">red</option>
        <option main_color="orange">orange</option>
        <option main_color="yellow">yellow</option>
        <option main_color="green">green</option>
        <option main_color="blue">blue</option>
        <option main_color="purple">purple</option>
        <option main_color="pink">pink</option>
        <option main_color="brown">brown</option>
        <option main_color="black">black</option>
        <option main_color="white">white</option>
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
        <Button type="submit" onClick={props.handleClose}>Add to Fabric Stash</Button>
        <Button onClick={props.handleClose}>Cancel</Button>
        </form>
    )
}


export default FabricForm
