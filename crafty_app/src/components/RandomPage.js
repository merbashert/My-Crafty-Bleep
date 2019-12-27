import React from 'react'

import RandomFind from './RandomFind'
import RandomForm from './RandomForm'
import Random from './Random'

class RandomPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randoms: [],
            formInputs: {
                name: null,
                details: null,
                box_number:null,
                id:null
            },
            randomFilter:'',
            boxNumberFilter:''
        }
    }

    handleChange = (e) => {
        this.setState({
            randomFilter: e.target.value
        })
    }

    handleBox = (e) => {
        this.setState({
            boxNumberFilter:e.target.value
        })
    }


    fetchRandom = () => {
        fetch(`${this.props.baseUrl}/randoms`)
        .then(data => data.json())
        .then(jData => {
            this.setState({
                randoms:jData
            })
        }).catch(err=>console.log(err))
    }

    handleCreateRandom = (createData) => {
        fetch(`${this.props.baseUrl}/randoms`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdRandom => {
            return createdRandom.json()
        })
        .then(json => {
            this.setState({
                randoms: json
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdateRandom = (updateData) => {
        fetch(`${this.props.baseUrl}/randoms/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedRandom => {
            console.log("update data: " + updateData);
            this.fetchRandom()
        }).catch(err=>console.log(err))
    }

    handleDeleteRandom = (id) => {
        fetch(`${this.props.baseUrl}/randoms/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            this.setState({
                randoms: this.state.randoms.filter(random => random.id !== id)

            })
        }).catch(err=>console.log(err))
    }

    setBox1 = () => {
        this.setState({
            boxNumberFilter:'1'
        })
    }
    setBox2 = () => {
        this.setState({
            boxNumberFilter:'2'
        })
    }
    setBox3 = () => {
        this.setState({
            boxNumberFilter:'3'
        })
    }

    componentDidMount(){//loads right after the page does
        this.fetchRandom()
    }


    render() {
        return (

            <div>


            <RandomForm
            handleCreateRandom={this.handleCreateRandom}
            handleUpdateRandom={this.handleUpdateRandom}
            formInputs={this.props.formInputs}
            />


            <label htmlFor="filter">Search for item </label>
            <input type="text" id="filter"
            value={this.state.randomFilter}
            onChange={this.handleChange}/>


            <div className="search-box">
            {this.state.randoms.filter(random=>{
                return random.name === this.state.randomFilter
            }).map((randomData) => (
                <RandomFind
                key={randomData.id}
                randomData={randomData}
                handleDeleteRandom={this.handleDeleteRandom}
                handleUpdateRandom={this.handleUpdateRandom}
                />
            ))}

            </div>
            <div className="random-box">

            <button className="btn btn-primary" onClick={this.setBox1}> Box 1 </button>
            <button className="btn btn-primary" onClick={this.setBox2}> Box 2 </button>
            <button className="btn btn-primary" onClick={this.setBox3}> Box 3 </button>

            Box 1
            {this.state.randoms.filter(random=>{
                return random.box_number === this.state.boxNumberFilter
            }).map((randomData) => (
                <Random
                key={randomData.id}
                randomData={randomData}
                handleDeleteRandom={this.handleDeleteRandom}
                handleUpdateRandom={this.handleUpdateRandom}
                />

            ))}
            </div>


            </div>
        )
    }


}

export default RandomPage
