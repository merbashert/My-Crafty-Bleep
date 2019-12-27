import React from 'react'

import NeedleForm from './NeedleForm'
import Needle from './Needles'



class NeedlePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            needles: []
        }
    }

    fetchNeedle = () => {
        fetch(`${this.props.baseUrl}/needles`)
        .then(data => data.json())
        .then(jData => {
            this.setState({needles:jData})
        }).catch(err=>console.log(err))
    }

    handleCreateNeedle = (createData) => {
        fetch(`${this.props.baseUrl}/needles`, {
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
            this.setState({
                needles: json,
                action: 'create'
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdateNeedle = (updateData) => {
        fetch(`${this.props.baseUrl}/needles/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedNeedle => {
            this.setState({
                action: 'edit'
            })
            this.fetchNeedle()
        }).catch(err=>console.log(err))
    }

    handleDeleteNeedle = (id) => {
        fetch(`${this.props.baseUrl}/needles/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            this.setState({
                needles: this.state.needles.filter(needle => needle.id !== id)

            })
        }).catch(err=>console.log(err))
    }
    componentDidMount(){//loads right after the page does
        this.fetchNeedle()
    }

    render() {
        return (
            <React.Fragment>

            <NeedleForm
            handleCreateNeedle={this.handleCreateNeedle}
            formInputs={this.props.formInputs}
            />
            <div className = "needles">
            {this.state.needles.map((needleData) => (
                <Needle
                key={needleData.id}
                needleData={needleData}
                handleDeleteNeedle={this.handleDeleteNeedle}
                handleUpdateNeedle={this.handleUpdateNeedle}
                />

            ))}
            </div>

            </React.Fragment>
        )
    }


}

export default NeedlePage
