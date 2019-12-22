import React from 'react';

import Main from './components/Main.js'
import Aside from './components/Aside.js'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: {
                page: 'allRandom',
                pageTitle: 'Random'
            },
            formInputs: {
                name: null,
                details: null,
                box_number: null,
                id: null,
                length: null,
                tags: null,
                main_color: null
            }
        }
    }

    handleView = (view, randomData) => {
        let pageTitle = ''
        let formInputs = {
            name: '',
            details: '',
            box_number: '',
            id: null
        }
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
            formInputs = {
                name: randomData.name,
                details: randomData.details,
                box_number: randomData.box_number,
                id: randomData.id
            }
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
            },
            formInputs: formInputs
        })

    }

    render () {
        return (
            <div>
            <Main
            view={this.state.view}
            handleView = {this.handleView}
            formInputs={this.state.formInputs}
            randomData={this.state.randomData}
            fabricData={this.state.fabricData}
            />
            </div>
        )
    }
}


export default App
