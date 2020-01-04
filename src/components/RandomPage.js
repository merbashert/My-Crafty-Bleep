import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';

import RandomFind from './RandomFind'
import RandomForm from './RandomForm'
import Random from './Random'
import box_picture1 from '../assets/box1.png'
import box_picture2 from '../assets/box2.png'
import box_picture3 from '../assets/box3.png'


const RandomPage = props => {
    const[randoms, setRandoms] = useState([])
    const[randomFilter, setRandomFilter] = useState('')
    const[boxNumberFilter, setBoxNumberFilter] = useState('1')


    const handleChange = (e) => {
        setRandomFilter(e.target.value)
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

    const setBox = (boxNumber) => {
        setBoxNumberFilter(boxNumber)
    }

    useEffect(() => {
        fetchRandom();
    }, [])


    return (
        <div className='random-page'>
        <div className="add-form">
        <RandomForm
        handleCreateRandom={handleCreateRandom}
        />
        </div>
        <div className="search-box">
        <div className="search-terms">
        <label htmlFor="filter">Search for item</label>
        <input type="text" id="filter"
        value={randomFilter}
        onChange={handleChange}
        className='filter-input'
         />
        </div>

        <div className="results">
        {randoms.filter(random=>{
            return random.name === randomFilter
        }).map((randomData) => (
            <RandomFind
            key={randomData.id}
            randomData={randomData}
            />
        ))}
        </div>
        </div>

        <div className="random-box">

        <div className='boxes'>
        <img src={box_picture1} alt="box 1" onClick={() => setBox('1')} className='boxpicture' id='1' style={{opacity: boxNumberFilter!=='1'?'50%':'100%'}}/>
        <img src={box_picture2} alt="box 2" onClick={() => setBox('2')} className='boxpicture'id='2' style={{opacity: boxNumberFilter!=='2'?'50%':'100%'}}/>
        <img src={box_picture3} alt="box 3" onClick={() => setBox('3')} className='boxpicture'id='3' style={{opacity: boxNumberFilter!=='3'?'50%':'100%'}}/>
        </div>

        {boxNumberFilter?<h4>Box {boxNumberFilter}</h4>:null}

        <Table className="random-table" size='sm'>
        <tbody>
        {randoms.filter(random=>{
            return random.box_number === boxNumberFilter
        }).map((randomData) => (
            <Random
            key={randomData.id}
            randomData={randomData}
            handleUpdateRandom={handleUpdateRandom}
            handleDeleteRandom={handleDeleteRandom}
            />

        ))}
        </tbody>
        </Table>
        </div>
        </div>




    )
}

export default RandomPage
