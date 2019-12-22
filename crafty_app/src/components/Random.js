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
        <div>
        <h5>Name:{this.props.randomData.name}</h5>
        <h5>Details: {this.props.randomData.details}</h5>
        <h5>Box #: {this.props.randomData.box_number}</h5>
        </div>
        <div>
        {this.props.randomData.body}
        </div>
        <div>
        <ul>
        <li onClick={() => {
            this.props.handleUpdateRandom(this.props.randomData)
        }}>edit random</li>
        <li onClick={() => {
            this.props.handleDeleteRandom(this.props.randomData.id)
        }}>delete random</li>
        </ul>
        </div>
      </article>
    )
  }
}
// =============================
// EXPORT
// =============================
export default Random
