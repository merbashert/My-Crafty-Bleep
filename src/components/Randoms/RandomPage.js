import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

import RandomForm from './RandomForm'
import Random from './Random'
import { apiDelete, apiGet, apiPost } from '../../api'

import './Randoms.css';


const RandomPage = props => {
    const[randoms, setRandoms] = useState([])
    const[randomFilter, setRandomFilter] = useState('')
    const[boxNumberFilter, setBoxNumberFilter] = useState('')
    const [isLoading, setIsLoading] = useState(true)



    const handleChange = (e) => {
        setRandomFilter(e.target.value)
        setBoxNumberFilter('')
    }

    const handleDropdown = (e) => {
        setBoxNumberFilter(e.target.value)
        setRandomFilter('')
    }

    const clear = () => {
        setRandomFilter('')
        setBoxNumberFilter('')
    }

    const fetchRandom = useCallback(async () => {
        setIsLoading(true)
        await apiGet(`${props.baseUrl}/randoms`, 'Unable to load random items')
        .then(jData => {
            setRandoms(jData)
        }).catch(err=>console.log(err))
        .finally(() => {
            setIsLoading(false)
        })
    }, [props.baseUrl])

    const handleCreateRandom = (createData) => {
        return apiPost(`${props.baseUrl}/randoms`, createData, 'Unable to create random item')
        .then(json => {
            setRandoms(json)
        })
    }

    const handleDeleteRandom = (id) => {
        apiDelete(`${props.baseUrl}/randoms/${id}`, 'Unable to delete random item')
        .then(response => {
            setRandoms(currentRandoms => currentRandoms.filter(random => random.id !== id))
        }).catch(err=>console.log(err))
    }



    useEffect(() => {
        fetchRandom()
    }, [fetchRandom])

    const visibleRandoms = useMemo(() => randoms
    .filter(random => {
        return random.name
    })
    .filter(random => random.name.includes(randomFilter.toLowerCase()))
    .filter(random => {
        return boxNumberFilter === '' || random.box_number === boxNumberFilter
    }), [randoms, randomFilter, boxNumberFilter])
    
    return (
        <div>

            <>
            <Modal show={props.show} onHide={props.handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Random Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='add-form'>
                        <RandomForm handleClose={props.handleClose} handleCreateRandom={handleCreateRandom}/>
                    </div>
                </Modal.Body>
            </Modal>
            </>



        <div className='random-page'>
            <div className='function-box'>
                <div id='options'>
                    <div id='search'>
                        <label htmlFor="random-search-box">Search</label>
                        <input
                            type="text"
                            id="random-search-box"
                            value={randomFilter}
                            onChange={handleChange}
                            autoFocus={(window.screen.width <= 480) ? false : true }
                            />
                    </div>

                    <div id='filter_box'>
                        <label htmlFor="random-box-number-filter">Filter By Box:</label>
                        <select value={boxNumberFilter} id = 'random-box-number-filter' onChange={handleDropdown}>
                            <option value="">All</option>
                            <option value="1">Box 1</option>
                            <option value="2">Box 2</option>
                            <option value="3">Box 3</option>
                            <option value="4">Box 4</option>
                            <option value="5">Box 5</option>
                            <option value="6">Box 6</option>
                        </select>
                    </div>


                    <button onClick={() => clear()} id='clear-random'>Clear</button>
                </div>
                <div id='add-box'>
                    <button onClick={() => props.handleShow()} id = 'add-random'>Add New</button>
                    <button onClick={() => props.handleShow()} id = 'add-random-small'>+</button>
                </div>
            </div>

            {isLoading ?
                <h1 className='loading'>Loading...</h1>
                :
                visibleRandoms.length > 0 ?
                <Table className="random-table" size='sm'>
    <tbody>
        {visibleRandoms.map((randomData) => (
            <Random
                key={randomData.id}
                randomData={randomData}
                fetchRandom={fetchRandom}
                baseUrl={props.baseUrl}
                handleDeleteRandom={handleDeleteRandom}
                />
        ))}
    </tbody>
</Table>
            :
            <h1 className='loading'>No random items found.</h1>

        }

    </div>
</div>
)
}

export default RandomPage
