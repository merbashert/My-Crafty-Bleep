import React from 'react'

import FabricForm from './FabricForm'
import Fabric from './Fabrics'



class FabricPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fabrics: [],
            fabricTagFilter: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            fabricTagFilter: e.target.value,
            mainColorFilter: e.target.value
        })
    }

    // handleChangeTag = (e) => {
    //     this.setState({
    //         fabricTagFilter: e.target.value
    //     })
    // }
    //
    // handleChangeColor = (e) => {
    //     this.setState({
    //         mainColorFilter: e.target.value
    //     })
    // }

    fetchFabric = () => {
        fetch(`${this.props.baseUrl}/fabrics`)
        .then(data => data.json())
        .then(jData => {
            this.setState({fabrics:jData})
        }).catch(err=>console.log(err))
    }

    handleCreateFabric = (createData) => {
        fetch(`${this.props.baseUrl}/fabrics`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdFabric => {
            return createdFabric.json()
        })
        .then(json => {
            this.setState({
                fabrics: json
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdateFabric = (updateData) => {
        fetch(`${this.props.baseUrl}/fabrics/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedFabric => {
            this.fetchFabric()
        }).catch(err=>console.log(err))
    }

    handleDeleteFabric = (id) => {
        fetch(`${this.props.baseUrl}/fabrics/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            this.setState({
                fabrics: this.state.fabrics.filter(fabric => fabric.id !== id)

            })
        }).catch(err=>console.log(err))
    }
    componentDidMount(){//loads right after the page does
        this.fetchFabric()
    }

    render() {
        return (
            <div>
            Add Fabric:
            <FabricForm
            handleCreateFabric={this.handleCreateFabric}
            formInputs={this.props.formInputs}

            />

            <label htmlFor="filter">Search for tag/color</label>
            <input type="text" id="filter"
            value={this.state.fabricTagFilter}
            onChange={this.handleChange}/>

            <label id="main_color">
            Main Color:
            <select value={this.state.mainColorFilter} onChange={this.handleChange} id="main_color">
            <option main_color="all">all</option>
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



            {
                (this.state.fabricTagFilter===''  || this.state.fabricTagFilter==='all')
                ?
                <div>
                {this.state.fabrics.map((fabricData) => (
                    <Fabric
                    key={fabricData.id}
                    fabricData={fabricData}
                    handleDeleteFabric={this.handleDeleteFabric}
                    handleUpdateFabric={this.handleUpdateFabric}
                    />

                ))}</div>
                :
                <div>
                {this.state.fabrics.filter(fabric=>{
                    return fabric.tags === this.state.fabricTagFilter || fabric.main_color === this.state.mainColorFilter
                }).map((fabricData) => (
                    <Fabric
                    key={fabricData.id}
                    fabricData={fabricData}
                    handleDeleteFabric={this.handleDeleteFabric}
                    handleUpdateFabric={this.handleUpdateFabric}
                    />
                ))}
                </div>
            }




            </div>
        )//end of return
    }//


}

export default FabricPage
