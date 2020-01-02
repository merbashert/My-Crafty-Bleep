import React, { useState } from 'react'

const FabricForm = props => {
    const [length, setLength] = useState('')
    const [main_color, setMain_Color] = useState('')
    const [tags, setTags] = useState('')
    const [picture, setPicture] = useState('')
    const [id, setId] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const fabricinfo = {
            length:length,
            main_color:main_color,
            tags:tags,
            picture: picture,
            id:id
        }
        props.handleCreateFabric(fabricinfo);
        setLength('')
        setMain_Color('')
        setTags('')
        setPicture('')
        setId('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
        Length:
        <input type="text" placeholder="Length" id="length" value={length} onChange={e => setLength(e.target.value)}/>
        </label>

        <label id="main_color">
        Main Color:
        <select value={main_color} onChange={e => setMain_Color(e.target.value)} id="main_color" required>
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
        <input type="text" id="picture" value={picture} onChange={e => setPicture(e.target.value)} required/>
        </label>
        <input type="submit" value="Add to fabric stash" className='add-button'/>
        </form>
    )
}


export default FabricForm
