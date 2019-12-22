import React from 'react'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    console.log('this is for heroku');
}

class FabricForm extends React.Component {
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

    handleChangeFabric = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleCreateFabric(this.state)
    }


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

export default FabricForm
