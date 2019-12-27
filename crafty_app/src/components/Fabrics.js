import React from 'react'

const Fabrics = props => {
    return (
      <React.Fragment>
        <div className="fabric-box">
        <img src={props.fabricData.picture} className="fabric-pic" alt="fabric"/>
        <h5>Length:{props.fabricData.length}</h5>
        <h5>Main Color: {props.fabricData.main_color}</h5>
        <h5>Tags: {props.fabricData.tags}</h5>


        <p onClick={() => {
            props.handleDeleteFabric(props.fabricData.id)
        }}>delete post</p>
        </div>
      </React.Fragment>
    )
  }

export default Fabrics
