import React, { useState } from 'react'

const ZipperForm = props =>  {
    const [color, setColor] = useState('')
    const [size, setSize] = useState(props.zipperSize)



    const handleSubmit = (e) => {
        e.preventDefault()
        const zipperInfo = {
            size:size,
            color:color
        }
        props.handleCreateZipper(zipperInfo);
        setColor('')

    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" id="color" value={color} placeholder='new zipper' onChange={e => setColor(e.target.value)} required className = 'new-zipper'/>
        <input type="hidden" id="size" value={size}/>
        <input type="submit" className='add-zipper' value = 'Add'/>
        </form>
    )
}


export default ZipperForm
