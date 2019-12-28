import React, { useState, useEffect } from 'react'

import RandomFind from './RandomFind'
import RandomForm from './RandomForm'
import Random from './Random'
import box_picture1 from '../assets/box1.png'
import box_picture2 from '../assets/box2.png'
import box_picture3 from '../assets/box3.png'

const RandomPage = props => {
    const[randoms, setRandoms] = useState([])
    const[randomFilter, setRandomFilter] = useState('')
    const[boxNumberFilter, setBoxNumberFilter] = useState('')
    const[formInputs, setFormInputs] = useState(null)


    const handleChange = (e) => {
        setRandomFilter(e.target.value)
    }

    const handleBox = (e) => {
        setBoxNumberFilter(e.target.value)
    }


    const fetchRandom = () => {
        fetch(`${props.baseUrl}/randoms`)
        .then(data => data.json())
        .then(jData => {
            setRandoms(jData)
        }).catch(err=>console.log(err))
    }

    const handleCreateRandom = (createData) => {
        fetch(`${props.baseUrl}/randoms`, {
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
            setRandoms(json)
        })
        .catch(err=>console.log(err))
    }

    const handleUpdateRandom = (updateData) => {
        fetch(`${props.baseUrl}/randoms/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedRandom => {
            fetchRandom()
        }).catch(err=>console.log(err))
    }

    const handleDeleteRandom = (id) => {
        fetch(`${props.baseUrl}/randoms/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            setRandoms(randoms.filter(random => random.id !== id))
        }).catch(err=>console.log(err))
    }

    const setBox1 = () => {
        setBoxNumberFilter('1')
    }
    const setBox2 = () => {
        setBoxNumberFilter('2')
    }
    const setBox3 = () => {
        setBoxNumberFilter('3')
    }

    useEffect(() => {
        fetchRandom();
    }, [])


        return (

            <div>


            <RandomForm
            handleCreateRandom={handleCreateRandom}
            handleUpdateRandom={handleUpdateRandom}
            formInputs={props.formInputs}
            />


            <label htmlFor="filter">Search for item </label>
            <input type="text" id="filter"
            value={randomFilter}
            onChange={handleChange}/>


            <div className="search-box">
            {randoms.filter(random=>{
                return random.name === randomFilter
            }).map((randomData) => (
                <RandomFind
                key={randomData.id}
                randomData={randomData}
                handleDeleteRandom={handleDeleteRandom}
                handleUpdateRandom={handleUpdateRandom}
                />
            ))}

            </div>
            <br/>
                <img src={box_picture1} alt="box 1" onClick={setBox1}/>
                <img src={box_picture2} alt="box 2" onClick={setBox2}/>
                <img src={box_picture3} alt="box 3" onClick={setBox3}/>

            <div className="random-box">

            {randoms.filter(random=>{
                return random.box_number === boxNumberFilter
            }).map((randomData) => (
                <Random
                key={randomData.id}
                randomData={randomData}
                handleDeleteRandom={handleDeleteRandom}
                handleUpdateRandom={handleUpdateRandom}
                />

            ))}
            </div>


            </div>
        )
}

export default RandomPage
