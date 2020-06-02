
import React from 'react'




const Zipper = props => {

    return (

        <div className='zipper'>
        <p>
        <span style={{opacity: '50%'}} className='delete' onClick={(e) => {if (window.confirm('Definitely delete?')) props.handleDeleteZipper(props.zipperData.id)}}>x </span>
         {props.zipperData.color}</p>
        </div>
    )
}


export default Zipper
