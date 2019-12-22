import React from 'react'

import FabricForm from './FabricForm'
import Fabrics from './Fabrics'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    console.log('this is for heroku');
}

class FabricPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fabrics: []
        }
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
                fabrics: this.state.fabrics.filter(random => random.id !== id)

            })
        }).catch(err=>console.log(err))
    }
    componentDidMount(){//loads right after the page does
        this.fetchFabric()
    }

render() {
    return (
        <div>
        <FabricForm
        handleCreateFabric={this.handleCreateFabric}
        formInputs={this.props.formInputs}
        handleUpdateFabric={this.handleUpdateFabric}
        view={this.props.view}
        />
        {this.state.fabrics.map((fabricData) => (
            <Fabrics
            key={fabricData.id}
            fabricData={fabricData}
            handleDeleteFabric={this.handleDeleteFabric}
            />
    ))}

        </div>
    )
}


}

export default FabricPage
