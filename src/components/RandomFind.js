import React from 'react'


const RandomFind = props => {


    return (
        <div className = 'filtered-result'>
         {props.randomData.name} {props.randomData.details} Box {props.randomData.box_number}
         </div>
    )
  }
export default RandomFind
