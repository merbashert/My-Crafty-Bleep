import React from 'react'

const Zipper = props => {
    const confirmDelete = () => {
        if (window.confirm(`Definitely delete ${props.zipperData.size}" ${props.zipperData.color}?`)) {
            props.handleDeleteZipper(props.zipperData.id)
        }
    }

    return (

        <div className='zipper'>
        <p>
        <button type="button" style={{opacity: '50%'}} className='delete' onClick={confirmDelete}>x </button>
         {props.zipperData.color}</p>
        </div>
    )
}


export default Zipper
