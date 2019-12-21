// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class RandomForm extends React.Component {
    // ==============
    // STATE
    // ==============
    constructor() {
        super()
        this.state = {
            name: '',
            details: '',
            box_number: '',
            id: null
        }
    }

    // ==============
    // HANDLERS
    // ==============
    // handles form change
    handleChangeRandom = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    // handles submit
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.view.page === 'addRandom') {
            this.props.handleCreateRandom(this.state)
        } else if (this.props.view.page === 'editRandom') {
            this.props.handleUpdateRandom(this.state)
        }

    }

    componentDidMount(){
        this.setState({
            name: this.props.formInputs.name,
            details: this.props.formInputs.details,
            box_number: this.props.formInputs.box_number,
            id: this.props.formInputs.id
        })
    }

    // ==============
    // RENDER
    // ==============
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

// =============================
// EXPORT
// =============================
export default RandomForm
