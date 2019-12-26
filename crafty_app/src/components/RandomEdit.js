import React, {useState, useEffect} from 'react'

const RandomEdit = props => {

    const [name, setName] = useState(props.randomData.name)
    const [details, setDetails] = useState(props.randomData.details)
    const [box_number, setBox_Number] = useState(props.randomData.box_number)
    const [id, setId] = useState(props.randomData.id)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdateRandom(id)
    }

            return (
                <form onSubmit={handleSubmit}>
                <label>
                Item:
                <input type="text" placeholder="Item" id="name" value={name} onChange={e => setName(e.target.value)}/>
                </label>
                <label>
                Details(if any):
                <input type="text" placeholder="Details(if any)" id="details" value={details} onChange={e => setDetails(e.target.value)}/>
                </label>
                <label>
                Box #:
                <input type="number" placeholder="Box #" id="box_number" value={box_number} onChange={e => setBox_Number(e.target.value)}></input>
                </label>
                <input type="submit" value="Put in the Box"/>
                </form>
            )
        }



    export default RandomEdit
