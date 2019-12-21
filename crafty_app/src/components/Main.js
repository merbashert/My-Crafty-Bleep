import React from 'react'

// components
import Random from './Random.js'
import RandomForm from './RandomForm.js'
import Fabrics from './Fabrics.js'
import FabricForm from './FabricForm.js'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    console.log('this is for heroku');
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randoms: [],
            fabrics: []
        }
    }

    fetchRandom = () => {
        fetch(`${baseUrl}/randoms`)
        .then(data => data.json())
        .then(jData => {
            this.setState({randoms:jData})
        }).catch(err=>console.log(err))
    }

    handleCreateRandom = (createData) => {
        fetch(`${baseUrl}/randoms`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdRandom => {
            return createdRandom.json()
        })
        .then(json => {
            this.props.handleView('allRandom')
            this.setState({
                randoms: json
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdateRandom = (updateData) => {
        fetch(`${baseUrl}/randoms/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedRandom => {
            this.props.handleView('allRandom')
            this.fetchRandom()
        }).catch(err=>console.log(err))
    }

    handleDeleteRandom = (id) => {
        fetch(`${baseUrl}/randoms/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            this.setState({
                randoms: this.state.randoms.filter(random => random.id !== id)

            })
        }).catch(err=>console.log(err))
    }
    componentDidMount(){//loads right after the page does
        this.fetchRandom()
        this.fetchFabric()
    }

    fetchFabric = () => {
        fetch(`${baseUrl}/fabrics`)
        .then(data => data.json())
        .then(jData => {
            this.setState({fabrics:jData})
        }).catch(err=>console.log(err))
    }

    handleCreateFabric = (createData) => {
        fetch(`${baseUrl}/fabrics`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdFabric => {
            return createdFabric.json()
        })
        .then(json => {
            this.props.handleView('allFabric')
            this.setState({
                fabrics: json
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdateFabric = (updateData) => {
        fetch(`${baseUrl}/fabrics/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedFabric => {
            this.props.handleView('allFabric')
            this.fetchFabric()
        }).catch(err=>console.log(err))
    }

    handleDeleteFabric = (id) => {
        fetch(`${baseUrl}/fabrics/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            this.setState({
                fabrics: this.state.fabrics.filter(fabric => fabric.id !== id)

            })
        }).catch(err=>console.log(err))
    }

    // ==============
    // RENDER
    // ==============
    render () {
        return (
            <main>
            <h1>{this.props.view.pageTitle}</h1>
            {this.props.view.page === 'allRandom'
            ? this.state.randoms.map((randomData) => (
                <Random
                key={randomData.id}
                randomData={randomData}
                handleView={this.props.handleView}
                handleDeleteRandom={this.handleDeleteRandom}
                />
            ))
            : (this.props.view.page === 'addRandom' || this.props.view.page === 'editRandom') ?
            <RandomForm
            handleCreateRandom={this.handleCreateRandom}
            formInputs={this.props.formInputs}
            handleUpdateRandom={this.handleUpdateRandom}
            view={this.props.view}
            />
            :this.props.view.page === 'allFabric'
            ? this.state.fabrics.map((fabricData) => (
                <Fabrics
                key={fabricData.id}
                fabricData={fabricData}
                handleView={this.props.handleView}
                handleDeleteFabric={this.handleDeleteFabric}
                />
            ))
            :(this.props.view.page === 'addFabric' || this.props.view.page === 'editFabric') ?
            <FabricForm
            handleCreateFabric={this.handleCreateFabric}
            formInputs={this.props.formInputs}
            handleUpdateFabric={this.handleUpdateFabric}
            view={this.props.view}
            />
            :null
        }
        </main>
    )
}
} //end of Main component

// =============================
// EXPORT
// =============================
export default Main
