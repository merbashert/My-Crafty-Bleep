import React from 'react'


class Aside extends React.Component {

  render () {
    return (
      <aside>
        <ul className = "nav-bar">
          <li onClick={() => {this.props.handleView('home')}}>Home</li>
          <li onClick={() => {this.props.handleView('addFabric')}}>Add Fabric</li>
          <li onClick={() => {this.props.handleView('allFabric')}}>All Fabric</li>
          <li onClick={() => {this.props.handleView('addRandom')}}>Add Random</li>
          <li onClick={() => {this.props.handleView('allRandom')}}>All Random</li>
          <li onClick={() => {this.props.handleView('addNeedle')}}>Add Needle</li>
          <li onClick={() => {this.props.handleView('allNeedle')}}>All Needles</li>
        </ul>
      </aside>
    )
  }
}

export default Aside
