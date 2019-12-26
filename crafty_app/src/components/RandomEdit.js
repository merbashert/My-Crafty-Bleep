import React from 'react'

class RandomEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.randomData.name,
            details: props.randomData.details,
            box_number: props.randomData.box_number,
            id: props.randomData.id
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleUpdateRandom(this.state)
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


export default RandomEdit
