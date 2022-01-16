import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const ZipperForm = props =>  {
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const zipperInfo = {
            size:size,
            color:color
        }
        props.handleCreateZipper(zipperInfo);
        setColor('')
        setSize('')

    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Zipper Color:
    <input type="text" id="color" value={color} placeholder='new zipper' onChange={e => setColor(e.target.value)} required className = 'new-zipper'/>
        </label>
        <label>
        Zipper Size:
        <select id="size" value={size} onChange={e => setSize(e.target.value)} required>
            <option value=""></option>
            <option value="7">7 inches</option>
            <option value="9">9 inches</option>
            <option value="12">12 inches</option>
            <option value="14">14 inches</option>
            <option value="18">18 inches</option>
            <option value="20">20 inches</option>
            <option value="22">22 inches</option>
        </select>
        </label><br/>
        <Button type="submit" className='add-zipper' onClick={props.handleClose}>Add Zipper</Button>
        <Button className='add-zipper' onClick={props.handleClose}>Cancel</Button>
        </form>
    )
}


export default ZipperForm
