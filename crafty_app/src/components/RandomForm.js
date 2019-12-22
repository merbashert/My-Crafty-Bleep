import React from 'react'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    console.log('this is for heroku');
}

class RandomForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            details: '',
            box_number: '',
            id: null
        }
    }

    handleChangeRandom = (e) => {
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
            <input type="text" placeholder="Item" id="name" value={this.state.name} onChange={this.handleChangeRandom}/>
            </label>
            <label>
            Details(if any):
            <input type="text" placeholder="Details(if any)" id="details" value={this.state.details} onChange={this.handleChangeRandom}/>
            </label>
            <label id="random-form">
            Box #:
            <input type="number" placeholder="Box #" id="box_number" value={this.state.box_number} onChange={this.handleChangeRandom}></input>
            </label>
            <input type="submit" value="Put in the Box"/>
            </form>
        )
    }
}


export default RandomForm
