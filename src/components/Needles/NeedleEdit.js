import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const NeedleEdit = props => {

const [straight, setStraight] = useState(props.needleData.straight)
const [circular, setCircular] = useState(props.needleData.circular)
const [doublepoint, setDoublepoint] = useState(props.needleData.doublepoint)

    const handleSubmit = (e) => {
        e.preventDefault()
        const needleinfo = {
            size: props.needleData.size,
            straight:straight,
            circular:circular,
            doublepoint:doublepoint,
            id: props.needleData.id
        }
        props.handleUpdateNeedle(needleinfo)
        .then(() => {
            props.handleClose()
        })
        .catch(err=>console.log(err))
    }


        return (
            <div className='needle-edit'>
            <form onSubmit={handleSubmit}>

            <label htmlFor='edit-needle-straight' className='checkbox-label'>
            Straight
            <input
                type="checkbox"
                id="edit-needle-straight"
                checked={straight === '1'}
                onChange={e => setStraight(e.target.checked ? '1' : '0')}
                />
             <span className="checkmark"></span>
            </label><br/>
            <label htmlFor="edit-needle-circular" className='checkbox-label'>
            Circular
            <input
                type="checkbox"
                id="edit-needle-circular"
                checked={circular === '1'}
                onChange={e => setCircular(e.target.checked ? '1' : '0')}
                />
             <span className="checkmark"></span>
            </label><br/>
            <label htmlFor="edit-needle-doublepoint" className='checkbox-label'>
            Double-point
            <input
                type="checkbox"
                id="edit-needle-doublepoint"
                checked={doublepoint === '1'}
                onChange={e => setDoublepoint(e.target.checked ? '1' : '0')}
                />
             <span className="checkmark"></span>
            </label><br/>
            <div className='needle-buttons'>
            <Button type="submit">Apply Changes</Button>
            <Button onClick={props.handleClose}>Cancel</Button>
            </div>
            </form>
            </div>

        )
}

export default NeedleEdit
