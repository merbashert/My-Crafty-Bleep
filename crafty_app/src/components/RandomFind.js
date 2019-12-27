import React from 'react'


const RandomFind = props => {


    return (
        <div>
         {props.randomData.name}<br/>
         {props.randomData.details}<br/>
         Box {props.randomData.box_number}
         </div>
    )
  }
export default RandomFind
