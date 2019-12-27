import React from 'react'

const Needles = props => {
        return (
            <React.Fragment>
            <div className = "needle-box">
            {props.needleData.size}
            <table>
            <thead></thead>
            <tbody>
            <tr>
            <td>Straight</td>
            <td>{(props.needleData.straight==='1')? 'X' : null}</td>
            </tr>
            <tr>
            <td>Circular</td>
            <td>{(props.needleData.circular==='1')? 'X' : null}</td>
            </tr>
            <tr>
            <td>Double-point</td>
            <td>{(props.needleData.doublepoint==='1')? 'X' : null}</td>
            </tr>
            </tbody>
            </table>
            <p onClick={() => {
                props.handleUpdateNeedle(props.needleData)
            }}>edit</p>

            <p onClick={() => {
                props.handleDeleteNeedle(props.needleData.id)
            }}>delete</p>

            </div>
            <br/>
            </React.Fragment>
        )
}

export default Needles
