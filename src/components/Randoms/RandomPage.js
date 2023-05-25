import React, { useState, useEffect, useCallback } from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

import RandomForm from './RandomForm'
import Random from './Random'

import './Randoms.css';


const RandomPage = props => {
    const[randoms, setRandoms] = useState([])
    const[randomFilter, setRandomFilter] = useState('')
    const[boxNumberFilter, setBoxNumberFilter] = useState('')



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

    //
    // const fetchRandom = () => {
    //     fetch(`${props.baseUrl}/randoms`)
    //     .then(data => data.json())
    //     .then(jData => {
    //         setRandoms(jData)
    //     }).catch(err=>console.log(err))
    // }

    const fetchRandom = useCallback(async () => {
      await fetch(`https://meredithbashert.com/mycraftybleep-backend/randoms`)
      .then(data => data.json())
      .then(jData => {
          setRandoms(jData)
      }).catch(err=>console.log(err))
    }, [])

    const handleCreateRandom = (createData) => {
        fetch(`https://meredithbashert.com/mycraftybleep-backend/randoms`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }).then(createdRandom => {
            return createdRandom.json()
        }).then(json => {
            setRandoms(json)
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



    useEffect(() => {
        fetchRandom()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>

            <>
            <Modal show={props.show} onHide={props.handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Random Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='add-form'>
                        <RandomForm handleClose={props.handleClose} setRandoms={setRandoms} handleCreateRandom={handleCreateRandom}/>
                    </div>
                </Modal.Body>
            </Modal>
            </>



        <div className='random-page'>
            <div className='function-box'>
                <div id='options'>
                    <div id='search'>
                        <label htmlFor="search_box">Search</label>
                        <input
                            type="text"
                            id="search_box"
                            value={randomFilter}
                            onChange={handleChange}
                            autoFocus={(window.screen.width <= 480) ? false : true }
                            />
                    </div>

                    <div id='filter_box'>
                        <label htmlFor="box_number">Filter By Box:</label>
                        <select value={boxNumberFilter} id = 'box_number' onChange={handleDropdown}>
                            <option value="">All</option>
                            <option value="1">Box 1</option>
                            <option value="2">Box 2</option>
                            <option value="3">Box 3</option>
                            <option value="4">Box 4</option>
                        </select>
                    </div>


                    <button onClick={() => clear()} id='clear-random'>Clear</button>
                </div>
                <div id='add-box'>
                    <button onClick={() => props.handleShow()} id = 'add-random'>Add New</button>
                    <button onClick={() => props.handleShow()} id = 'add-random-small'>+</button>
                </div>
            </div>

            {randoms.length > 1 ?
                <Table className="random-table" size='sm'>
                    {
                        (boxNumberFilter === '') ?
                        <tbody>
                            {randoms.filter(random => {
                                return random.name
                            }).filter(random => random.name.includes(randomFilter.toLowerCase()))
                            .map((randomData) => (
                                <Random
                                    key={randomData.id}
                                    randomData={randomData}
                                    fetchRandom={fetchRandom}
                                    setRandoms={setRandoms}
                                    handleDeleteRandom={handleDeleteRandom}
                                    />

                            ))
                        }

                    </tbody>
                    :
                    <tbody>
                        {randoms.filter(random => {
                            return random.box_number === boxNumberFilter
                        }).map((randomData) => (
                            <Random
                                key={randomData.id}
                                randomData={randomData}
                                fetchRandom={fetchRandom}
                                setRandoms={setRandoms}
                                />
                        ))}

                    </tbody>
                }

            </Table>
            :
            <h1 className='loading'>Loading...</h1>

        }

    </div>
</div>
)
}

export default RandomPage
