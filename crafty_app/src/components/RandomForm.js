import React from 'react'
import Button from 'react-bootstrap/Button';

class RandomForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            details: '',
            box_number: '',
            id: null
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleCreateRandom(this.state)
    }



    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            Item:
            <input type="text" placeholder="Item" id="name" value={this.state.name} onChange={this.handleChange}/>
            </label>
            <label>
            Details(if any):
            <input type="text" placeholder="Details(if any)" id="details" value={this.state.details} onChange={this.handleChange}/>
            </label>
            <label id="random-form">
            Box #:
            <input type="number" placeholder="Box #" id="box_number" value={this.state.box_number} onChange={this.handleChange}></input>
            </label>
            <input type="submit" value="Put in the Box"/>
            </form>
        )
    }
}


export default RandomForm
