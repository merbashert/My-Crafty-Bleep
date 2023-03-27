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
        handleCreateZipper(zipperInfo);
        setColor('')
        setSize('')

    }

    const handleCreateZipper = (createData) => {
        fetch(`https://mycraftybleep-backend.meredithbashert.com/zippers`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdZipper => {
            return createdZipper.json()
        })
        .then(json => {
            props.setZippers(json)
        })
        .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={handleSubmit} className='zipper-modal'>
        <label>
            Zipper Color:
    <input type="text" id="color" value={color} onChange={e => setColor(e.target.value)} required className = 'new-zipper'/>
        </label>
        <br/>
        <label>
        Zipper Size:
        <select id="size" value={size} id='new-zipper-size' onChange={e => setSize(e.target.value)} required>
            <option value=""></option>
            <option value="7">7 inches</option>
            <option value="9">9 inches</option>
            <option value="12">12 inches</option>
            <option value="14">14 inches</option>
            <option value="18">18 inches</option>
            <option value="20">20 inches</option>
            <option value="22">22 inches</option>
        </select>
        </label>
        <br/>
        <Button type="submit" className='add-zipper-button' onClick={props.handleClose}>Add Zipper</Button>
        <Button id='zipper-cancel' onClick={props.handleClose}>Cancel</Button>
        </form>
    )
}


export default ZipperForm
