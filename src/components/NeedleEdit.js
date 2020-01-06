import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const NeedleEdit = props => {

const [size, setSize] = useState(props.needleData.size)
const [straight, setStraight] = useState(props.needleData.straight)
const [circular, setCircular] = useState(props.needleData.circular)
const [doublepoint, setDoublepoint] = useState(props.needleData.doublepoint)
const [id, setId] = useState(props.needleData.id)



    const handleSubmit = (e) => {
        e.preventDefault()
        const needleinfo = {
            size:size,
            straight:straight,
            circular:circular,
            doublepoint:doublepoint,
            id:id
        }
        props.handleUpdateNeedle(needleinfo)
        setSize('')
        setStraight('')
        setCircular('')
        setDoublepoint('')
        setId('')
    }


        return (
            <div className='needle-edit'>
            <form onSubmit={handleSubmit}>

            <label id='straight' className='checkbox-label'>
            Straight
            {(straight==='1')
            ?
            <input type="checkbox" id="straight" value={straight} onChange={e => setStraight('0')} defaultChecked={true} />
            :
            <input type="checkbox" id="straight" value='' onChange={e => setStraight('1')}/>
            }
             <span className="checkmark"></span>
            </label><br/>
            <label id="circular" className='checkbox-label'>
            Circular
            {(circular==='1')
            ?
            <input type="checkbox" id="circular" value={circular} onChange={e => setCircular('0')} defaultChecked={true}/>
            :
            <input type="checkbox" id="circular" value='' onChange={e => setCircular('1')}/>}
             <span className="checkmark"></span>
            </label><br/>
            <label id="doublepoint" className='checkbox-label'>
            Double-point
            {(doublepoint==='1')
            ?
            <input type="checkbox" id="doublepoint" value={doublepoint} onChange={e => setDoublepoint('0')} defaultChecked={true}/>
            :
            <input type="checkbox" id="doublepoint" value='' onChange={e => setDoublepoint('1')}/>}
             <span className="checkmark"></span>
            </label><br/>
            <div className='needle-buttons'>
            <Button type="submit" onClick={props.handleClose}>Apply Changes</Button>
            <Button onClick={props.handleClose}>Cancel</Button>
            </div>
            </form>
            </div>

        )
}

export default NeedleEdit
