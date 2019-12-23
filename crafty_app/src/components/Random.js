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
        <p>{this.props.randomData.name} ({this.props.randomData.details})</p>
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
