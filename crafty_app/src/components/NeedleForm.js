import React from 'react'

class NeedleForm extends React.Component {

    constructor() {
        super()
        this.state = {
            size: '',
            straight: '',
            circular: '',
            doublepoint: '',
            id: null
        }
    }

    handleChangeNeedle = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleCreateNeedle(this.state)
    }


    // ==============
    // RENDER
    // ==============
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            Size
            <input type="text" placeholder="Size" id="size" value={this.state.size} onChange={this.handleChangeNeedle}/>
            </label>
            <label>
            Straight
            <input type="checkbox" id="straight" value={this.state.straight} onChange={this.handleChangeNeedle}/>
            </label>
            <label id="circular">
            Circular
            <input type="text" placeholder="Circular" id="circular" value={this.state.circular} onChange={this.handleChangeNeedle}></input>
            </label>
            <label id="doublepoint">
            Double-point
            <input type="text" id="doublepoint" value={this.state.doublepoint} onChange={this.handleChangeNeedle}></input>
            </label>
            <input type="submit" value="Put in the Box"/>
            </form>
        )
    }
}

// =============================
// EXPORT
// =============================
export default NeedleForm
