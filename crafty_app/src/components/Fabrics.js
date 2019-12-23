import React from 'react'

class Fabrics extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
        <h5>Length:{this.props.fabricData.length}</h5>
        <h5>Tags: {this.props.fabricData.tags}</h5>
        <h5>Main Color: {this.props.fabricData.main_color}</h5>
        <img src={this.props.fabricData.picture} className="fabric-pic" alt="fabric"/>
        </div>
        <div>
        <ul>

        <li onClick={() => {
            this.props.handleDeleteFabric(this.props.fabricData.id)
        }}>delete post</li>
        </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Fabrics
