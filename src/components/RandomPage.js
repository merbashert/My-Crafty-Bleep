import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

import RandomForm from './RandomForm'
import Random from './Random'




const RandomPage = props => {
    const[randoms, setRandoms] = useState([])
    const[randomFilter, setRandomFilter] = useState('')
    const[boxNumberFilter, setBoxNumberFilter] = useState('')
    const [show, setShow] = useState(false);


    const handleChange = (e) => {
        setRandomFilter(e.target.value)
    }

    const handleDropdown = (e) => {
        setBoxNumberFilter(e.target.value)
    }

    const clear = () => {
        setRandomFilter('')
        setBoxNumberFilter('')
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

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = (e) => {
        setShow(true)
    }

    useEffect(() => {
        fetchRandom();
    }, [])


    return (
        <React.Fragment>

            <>
            <Modal show={show} onHide={handleClose} style={ {backgroundColor: 'rgb(255, 255, 255, .5)'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Random Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='add-form'>
                        <RandomForm handleCreateRandom={handleCreateRandom} handleClose={handleClose}/>
                    </div>
                </Modal.Body>
            </Modal>
            </>



        <div className='random-page'>
            <div className='function-box'>
                <div>
                <label htmlFor="filter">Search All Boxes</label>
                <input type="text" id="filter" value={randomFilter} onChange={handleChange} className='filter-input' autoFocus='autofocus'/>

                Filter By Box: <select value={boxNumberFilter} id = 'box_number' onChange={handleDropdown}>
                <option value="">All</option>
                <option value="1">Box 1</option>
                <option value="2">Box 2</option>
                <option value="3">Box 3</option>
                <option value="4">Box 4</option>
            </select>
            <button onClick={() => clear()} id='clear-random'>Clear</button>
            </div>
            <div>
            <button onClick={() => handleShow()} id = 'add-random'>Add New</button><br/>
            </div>
        </div>

            <Table className="random-table" size='sm'>
                {
                    (boxNumberFilter === '') ?
                    <tbody>
                        {randoms.filter(random => {
                            return random.name
                        }).filter(random => random.name.includes(randomFilter))
                        .map((randomData) => (
                            <Random
                                key={randomData.id}
                                randomData={randomData}
                                handleUpdateRandom={handleUpdateRandom}
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
                            handleUpdateRandom={handleUpdateRandom}
                            handleDeleteRandom={handleDeleteRandom}
                            />
                    ))}

                </tbody>
            }

        </Table>
    </div>
</React.Fragment>
)
}

export default RandomPage
