import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { fabricColors } from '../../constants'

const FabricEdit = props => {
    const [length, setLength] = useState(props.fabricData.length)
    const [main_color, setMain_Color] = useState(props.fabricData.main_color)
    const [tags, setTags] = useState(props.fabricData.tags?props.fabricData.tags:'')

    const handleSubmit = (e) => {
        e.preventDefault()
        const fabricinfo = {
            length:length,
            main_color:main_color,
            tags:tags,
            picture: props.fabricData.picture,
            id: props.fabricData.id
        }
        props.handleUpdateFabric(fabricinfo)
    }

    return (
        <div className='fabric-edit'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="edit-fabric-length">
                    Length:
                    <input type="text" placeholder="Length" id="edit-fabric-length" value={length} onChange={e => setLength(e.target.value)}/>
                </label><br/>
                <label htmlFor="edit-fabric-main-color">
                    Main Color:
                    <select value={main_color} onChange={e => setMain_Color(e.target.value)} id="edit-fabric-main-color">
                        {fabricColors.map((color, i) => {
                            return <option key = {i} value={color}>{color}</option>
                        })}
                    </select>
                </label><br/>
                <label htmlFor="edit-fabric-tags">
                    Tags:
                    <input type="text" placeholder="Tags" id="edit-fabric-tags" value={tags} onChange={e => setTags(e.target.value)}/>
                </label><br/>
                <Button type="submit">Apply Changes</Button>
                <Button onClick={props.handleClose}>Cancel</Button>
            </form>
        </div>
    )

}

export default FabricEdit
