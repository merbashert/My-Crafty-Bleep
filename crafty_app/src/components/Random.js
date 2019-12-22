// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Random extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <article>
        <div className="random-box">
        <h5>Name:{this.props.randomData.name}</h5>
        <h5>Details: {this.props.randomData.details}</h5>
        <h5>Box #: {this.props.randomData.box_number}</h5>



        <p onClick={() => {
            this.props.handleDeleteRandom(this.props.randomData.id)
        }}>delete</p>

        </div>
      </article>
    )
  }
}
// =============================
// EXPORT
// =============================
export default Random
