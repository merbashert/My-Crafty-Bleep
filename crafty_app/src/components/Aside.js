import React from 'react'


class Aside extends React.Component {

  render () {
    return (
      <aside>
        <ul className = "nav-bar">
          <li onClick={() => {this.props.handleView('home')}}>Home</li>
          <li onClick={() => {this.props.handleView('addFabric')}}>Add Fabric</li>
          <li onClick={() => {this.props.handleView('allFabric')}}>All Fabric</li>
        </ul>
      </aside>
    )
  }
}

export default Aside
