import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const FabricEdit = props => {
    const [length, setLength] = useState(props.fabricData.length)
    const [main_color, setMain_Color] = useState(props.fabricData.main_color)
    const [tags, setTags] = useState(props.fabricData.tags?props.fabricData.tags:'')
    const colors = ['red','orange','yellow','green', 'blue', 'purple', 'pink', 'brown', 'black', 'white']

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
                <label>
                    Length:
                    <input type="text" placeholder="Length" id="length" value={length} onChange={e => setLength(e.target.value)}/>
                </label><br/>
                <label id="main_color">
                    Main Color:
                    <select value={main_color} onChange={e => setMain_Color(e.target.value)} id="main_color">
                        {colors.map((color, i) => {
                            return <option key = {i} value={color}>{color}</option>
                        })}
                    </select>
                </label><br/>
                <label>
                    Tags:
                    <input type="text" placeholder="Tags" id="tags" value={tags} onChange={e => setTags(e.target.value)}/>
                </label><br/>
                <Button type="submit">Apply Changes</Button>
                <Button onClick={props.handleClose}>Cancel</Button>
            </form>
        </div>
    )

}

export default FabricEdit
