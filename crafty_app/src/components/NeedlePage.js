import React from 'react'

import NeedleForm from './NeedleForm'
import Needles from './Needles'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    console.log('this is for heroku');
}

class NeedlePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            needles: []
        }
    }

    fetchNeedle = () => {
        fetch(`${baseUrl}/needles`)
        .then(data => data.json())
        .then(jData => {
            this.setState({needles:jData})
        }).catch(err=>console.log(err))
    }

    handleCreateNeedle = (createData) => {
        fetch(`${baseUrl}/needles`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdNeedle => {
            return createdNeedle.json()
        })
        .then(json => {
            this.props.handleView('allNeedle')
            this.setState({
                needles: json
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdateNeedle = (updateData) => {
        fetch(`${baseUrl}/needles/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedNeedle => {
            this.props.handleView('allNeedle')
            this.fetchNeedle()
        }).catch(err=>console.log(err))
    }

    handleDeleteNeedle = (id) => {
        fetch(`${baseUrl}/needles/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            this.setState({
                needles: this.state.needles.filter(random => random.id !== id)

            })
        }).catch(err=>console.log(err))
    }
    componentDidMount(){//loads right after the page does
        this.fetchNeedle()
    }

render() {
    return (
        <div>
        <NeedleForm
        handleCreateNeedle={this.handleCreateNeedle}
        formInputs={this.props.formInputs}
        handleUpdateNeedle={this.handleUpdateNeedle}
        view={this.props.view}
        />
        {this.state.needles.map((needleData) => (
            <Needles
            key={needleData.id}
            needleData={needleData}
            handleDeleteNeedle={this.handleDeleteNeedle}
            />
    ))}

        </div>
    )
}


}

export default NeedlePage