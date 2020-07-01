import React from 'react'


const RandomFind = props => {


    return (
<React.Fragment>
        <div className = 'filtered-info'>
         <div className = 'filtered-name'>{props.randomData.name}</div>
         {props.randomData.details?<div className = 'filtered-details'>{props.randomData.details}</div>:null}
         </div>
         <div className="filtered-box"> Box {props.randomData.box_number}</div>

         </React.Fragment>
    )
  }
export default RandomFind
