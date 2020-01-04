import React from 'react'


const RandomFind = props => {


    return (
        <div className = 'filtered-result'>
        <div className = 'filtered-info'>
         <div className = 'filtered-name'>{props.randomData.name}</div>
         {props.randomData.details?<div className = 'filtered-details'> {props.randomData.details}</div>:null}
         </div>
         <div className="filtered-box"> Box {props.randomData.box_number}</div>

         </div>
    )
  }
export default RandomFind
