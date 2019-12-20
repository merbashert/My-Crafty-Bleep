import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Main from './components/Main.js'
import Aside from './components/Aside.js'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: {
                page: 'home',
                pageTitle: 'Home'
            }
        }
    }
    handleView = (view) => {
        let pageTitle = ''

    switch(view) {
        case 'home':
        pageTitle = 'Home'
        break
        case 'addFabric':
        pageTitle = 'Add Fabric'
        break
        case 'editFabric':
        pageTitle = "Edit Fabric"
        break
        case 'allFabric':
        pageTitle = 'All Fabric'
        break
        case 'addRandom':
        pageTitle = 'Add Random'
        break
        case 'editRandom':
        pageTitle = "Edit Random"
        break
        case 'allRandom':
        pageTitle = 'All Random'
        break
        case 'addNeedle':
        pageTitle = 'Add Needle'
        break
        case 'editNeedle':
        pageTitle = "Edit Needle"
        break
        case 'allNeedle':
        pageTitle = 'All Needle'
        break
        default:
        break

    }
    this.setState({
        view: {
            page: view,
            pageTitle: pageTitle
        }
    })

}




render () {
    return (
        <Router>
        <div>
        <Aside handleView={this.handleView} className = 'nav-bar'/>
        <Main
        view={this.state.view}
        handleView = {this.handleView}/>
        </div>
        </Router>
    )
}
}


export default App
