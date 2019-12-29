import React from 'react'

class NeedleForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            size: props.needleData.size,
            straight: props.needleData.straight,
            circular: props.needleData.circular,
            doublepoint: props.needleData.doublepoint,
            id: props.needleData.id
        }
    }

    handleChangeNeedle = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    handleChangeNeedleCheck = (e) => {
        this.setState({ [e.target.id]: e.target.checked })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleUpdateNeedle(this.state)
    }


    // ==============
    // RENDER
    // ==============
    render () {
        return (

            <form onSubmit={this.handleSubmit}>
            {this.state.size}<br/>
            <label>
            <input type="hidden" placeholder="Size" id="size" value={this.state.size} onChange={this.handleChangeNeedle}/>
            </label>
            <label>
            Straight
            {(this.state.straight==='1')?<input type="checkbox" id="straight" value={this.state.straight} onChange={this.handleChangeNeedleCheck} checked/>:
            <input type="checkbox" id="straight" value={this.state.straight} onChange={this.handleChangeNeedleCheck}/>
            }
            </label>
            <label id="circular">
            Circular
            {(this.state.circular==='1')?<input type="checkbox" id="circular" value={this.state.circular} onChange={this.handleChangeNeedleCheck} checked/>:
            <input type="checkbox" id="circular" value={this.state.circular} onChange={this.handleChangeNeedleCheck}/>}
            </label>
            <label id="doublepoint">
            Double-point
            {(this.state.doublepoint==='1')?<input type="checkbox" id="doublepoint" value={this.state.doublepoint} onChange={this.handleChangeNeedleCheck} checked/>:
            <input type="checkbox" id="doublepoint" value={this.state.doublepoint} onChange={this.handleChangeNeedleCheck}/>}
            </label>
            <input type="submit" value="Apply Changes" onClick={this.props.handleClose}/>
            </form>

        )
    }
}

// =============================
// EXPORT
// =============================
export default NeedleForm
