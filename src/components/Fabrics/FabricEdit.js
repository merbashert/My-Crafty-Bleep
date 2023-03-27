import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const FabricEdit = props => {
    const [length, setLength] = useState(props.fabricData.length)
    const [main_color, setMain_Color] = useState(props.fabricData.main_color)
    const [tags, setTags] = useState(props.fabricData.tags?props.fabricData.tags:'')
    const [picture, setPicture] = useState(props.fabricData.picture)
    const [id, setId] = useState(props.fabricData.id)

    const handleSubmit = (e) => {
        e.preventDefault()
        const fabricinfo = {
            length:length,
            main_color:main_color,
            tags:tags,
            picture: picture,
            id:id
        }
        props.handleUpdateFabric(fabricinfo)
        setLength('')
        setMain_Color('')
        setTags('')
        setPicture('')
        setId('')
    }

    return (
        <div className='fabric-edit'>
            <form onSubmit={handleSubmit}>
                <label>
                    Length:
                    <input type="text" placeholder="Length" id="length" value={length} onChange={e => setLength(e.target.value)}/>
                </label><br/>
                <label id="main_color">
                    Main Color:
                    <select value={main_color} onChange={e => setMain_Color(e.target.value)} id="main_color">
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
                </label><br/>
                <label>
                    Tags:
                    <input type="text" placeholder="Tags" id="tags" value={tags} onChange={e => setTags(e.target.value)}/>
                </label><br/>
                <label id="picture">
                    <input type="hidden" id="picture" value={picture} onChange={e => setPicture(e.target.value)} className='fabric-picture'/>
                </label><br/>
                <Button type="submit" onClick={props.handleClose}>Apply Changes</Button>
                <Button onClick={props.handleClose}>Cancel</Button>
            </form>
        </div>
    )

}

export default FabricEdit
