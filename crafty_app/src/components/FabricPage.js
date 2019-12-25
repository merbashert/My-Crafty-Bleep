import React from 'react'

import FabricForm from './FabricForm'
import Fabric from './Fabrics'



class FabricPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fabrics: []
        }
    }

    fetchFabric = () => {
        fetch(`${this.props.baseUrl}/fabrics`)
        .then(data => data.json())
        .then(jData => {
            this.setState({fabrics:jData})
        }).catch(err=>console.log(err))
    }

    handleCreateFabric = (createData) => {
        fetch(`${this.props.baseUrl}/fabrics`, {
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
            this.setState({
                fabrics: json,
                action: 'create'
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdateFabric = (updateData) => {
        fetch(`${this.props.baseUrl}/fabrics/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedFabric => {
            this.setState({
                action: 'edit'
            })
            this.fetchFabric()
        }).catch(err=>console.log(err))
    }

    handleDeleteFabric = (id) => {
        fetch(`${this.props.baseUrl}/fabrics/${id}`, {
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
    componentDidMount(){//loads right after the page does
        this.fetchFabric()
    }

render() {
    return (
        <div>
        <FabricForm
        handleCreateFabric={this.handleCreateFabric}
        formInputs={this.props.formInputs}

        />
        {this.state.fabrics.map((fabricData) => (
            <Fabric
            key={fabricData.id}
            fabricData={fabricData}
            handleDeleteFabric={this.handleDeleteFabric}
            handleUpdateFabric={this.handleUpdateFabric}
            />
    ))}

        </div>
    )
}


}

export default FabricPage
