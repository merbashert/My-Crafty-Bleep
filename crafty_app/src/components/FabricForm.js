import React from 'react'

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

    handleChange = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleCreateFabric(this.state)
        console.log(this.state);
        this.setState({
            length: '',
            tags: '',
            main_color: '',
            picture: ''
        })
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            Length:
            <input type="text" placeholder="Length" id="length" value={this.state.length} onChange={this.handleChange}/>
            </label>

            <label id="main_color">
            Main Color:
            <select value={this.state.main_color} onChange={this.handleChange} id="main_color">
            <option main_color=""></option>
            <option main_color="red">red</option>
            <option main_color="orange">orange</option>
            <option main_color="yellow">yellow</option>
            <option main_color="green">green</option>
            <option main_color="blue">blue</option>
            <option main_color="purple">purple</option>
            <option main_color="pink">pink</option>
            <option main_color="brown">brown</option>
            <option main_color="black">black</option>
            <option main_color="white">white</option>
            </select>
            </label>
            <label>
            Tags:
            <input type="text" placeholder="Tags" id="tags" value={this.state.tags} onChange={this.handleChange}/>
            </label>
            <label id="picture">
            Picture:
            <input type="text" id="picture" value={this.state.picture} onChange={this.handleChange}></input>
            </label>
            <input type="submit" value="Add to fabric stash"/>
            </form>
        )
    }
}

export default FabricForm
