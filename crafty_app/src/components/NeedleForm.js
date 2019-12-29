import React from 'react'

class NeedleForm extends React.Component {

    constructor(props) {
        super(props)
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

    handleChangeNeedleCheck = (e) => {
        this.setState({ [e.target.id]: e.target.checked })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleCreateNeedle(this.state)
        this.setState({
            size: '',
            straight: '',
            circular: '',
            doublepoint: ''
        })
    }


    // ==============
    // RENDER
    // ==============
    render () {
        return (
            <div className="needle-box">
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
            <input type="checkbox" id="circular" value={this.state.circular} onChange={this.handleChangeNeedleCheck}></input>
            </label>
            <label id="doublepoint">
            Double-point
            <input type="checkbox" id="doublepoint" value={this.state.doublepoint} onChange={this.handleChangeNeedleCheck}></input>
            </label>
            <input type="submit" value="Put in the Box"/>
            </form>
            </div>
        )
    }
}

// =============================
// EXPORT
// =============================
export default NeedleForm
