import React from 'react'


const RandomFind = props => {


    return (
<React.Fragment>
        <div className = 'filtered-info'>
         <h3 className = 'filtered-name'>{props.randomData.name}</h3>
         {props.randomData.details?props.randomData.details:null}
         </div>
         <div className="filtered-box"> Box {props.randomData.box_number}</div>

         </React.Fragment>
    )
  }
export default RandomFind
