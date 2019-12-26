import React from 'react'

import RandomForm from './RandomForm'
import Random from './Random'

class RandomPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randoms: [],
            formInputs: {
                name: null,
                details: null,
                box_number:null,
                id:null
            }
        }
    }

    fetchRandom = () => {
        fetch(`${this.props.baseUrl}/randoms`)
        .then(data => data.json())
        .then(jData => {
            this.setState({
                randoms:jData
            })
        }).catch(err=>console.log(err))
    }

    handleCreateRandom = (createData) => {
        fetch(`${this.props.baseUrl}/randoms`, {
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
            this.setState({
                randoms: json
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdateRandom = (updateData) => {
        fetch(`${this.props.baseUrl}/randoms/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedRandom => {
            console.log("update data: " + updateData);
            this.fetchRandom()
        }).catch(err=>console.log(err))
    }

    handleDeleteRandom = (id) => {
        fetch(`${this.props.baseUrl}/randoms/${id}`, {
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
    }


render() {
    return (
        <div>
        <RandomForm
        handleCreateRandom={this.handleCreateRandom}
        handleUpdateRandom={this.handleUpdateRandom}
        formInputs={this.props.formInputs}


        />
        {this.state.randoms.map((randomData) => (
            <Random
            key={randomData.id}
            randomData={randomData}
            handleDeleteRandom={this.handleDeleteRandom}
            handleUpdateRandom={this.handleUpdateRandom}
            />
    ))}

        </div>
    )
}


}

export default RandomPage
