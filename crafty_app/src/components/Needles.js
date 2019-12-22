import React from 'react'

class Needles extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
        <h5>Size: {this.props.needleData.size}</h5>
        <h5>Straight: {this.props.needleData.straight}</h5>
        <h5>Circular: {this.props.needleData.circular}</h5>
        <h5>Double-point: {this.props.needleData.doublepoint}</h5>
        </div>
        <div>
        {this.props.needleData.body}
        </div>
        <div>
        <ul>
        <li onClick={() => {
            {this.props.handleView('editNeedle', this.props.needleData)}
        }}>edit post</li>
        <li onClick={() => {
            this.props.handleDeleteNeedle(this.props.needleData.id)
        }}>delete post</li>
        </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Needles
