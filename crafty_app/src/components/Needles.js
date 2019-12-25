import React from 'react'

class Needles extends React.Component {
    render () {
        return (
            <React.Fragment>
            <div className = "needle-box">
            {this.props.needleData.size}
            <table>
            <thead></thead>
            <tbody>
            <tr>
            <td>Straight</td>
            <td>{(this.props.needleData.straight==='1')? 'X' : null}</td>
            </tr>
            <tr>
            <td>Circular</td>
            <td>{(this.props.needleData.circular==='1')? 'X' : null}</td>
            </tr>
            <tr>
            <td>Double-point</td>
            <td>{(this.props.needleData.doublepoint==='1')? 'X' : null}</td>    </tr>
            </tbody>
            </table>
            <p onClick={() => {
                this.props.handleUpdateNeedle(this.props.needleData)
            }}>edit</p>

            <p onClick={() => {
                this.props.handleDeleteNeedle(this.props.needleData.id)
            }}>delete</p>

            </div>
            <br/>
            </React.Fragment>
        )
    }
}

export default Needles
