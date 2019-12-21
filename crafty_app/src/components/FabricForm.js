// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class FabricForm extends React.Component {
    // ==============
    // STATE
    // ==============
    constructor() {
        super()
        this.state = {
            length: '',
            tags: '',
            main_color: '',
            picture: '',
            id: null
        }
    }

    // ==============
    // HANDLERS
    // ==============
    // handles form change
    handleChangeFabric = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    // handles submit
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.view.page === 'addFabric') {
            this.props.handleCreateFabric(this.state)
        } else if (this.props.view.page === 'editFabric') {
            this.props.handleUpdateFabric(this.state)
        }

    }

    componentDidMount(){
        this.setState({
            length: this.props.formInputs.length,
            tags: this.props.formInputs.tags,
            main_color: this.props.formInputs.main_color,
            picture: this.props.formInputs.picture,
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
            Length:
            <input type="text" placeholder="Length" id="length" value={this.state.length} onChange={this.handleChangeFabric}/>
            </label>
            <label>
            Tags:
            <input type="text" placeholder="Tags" id="tags" value={this.state.tags} onChange={this.handleChangeFabric}/>
            </label>
            <label id="main_color">
            Main Color:
            <input type="text" placeholder="Main Color" id="main_color" value={this.state.main_color} onChange={this.handleChangeFabric}></input>
            </label>
            <label id="picture">
            Picture:
            <input type="text" id="picture" value={this.state.picture} onChange={this.handleChangeFabric}></input>
            </label>
            <input type="submit" value="Put in the Box"/>
            </form>
        )
    }
}

// =============================
// EXPORT
// =============================
export default FabricForm
