// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
import RandomEdit from './RandomEdit'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// =============================
// COMPONENT CLASS
// =============================
class Random extends React.Component {

    render () {

        return (
            <article>
            <div className="random-box">
            <p>{this.props.randomData.name}<br/>
            {(this.props.randomData.details)}</p>
            <Router>
            <Link to="/random-edit">Edit</Link>
            <Switch>
            <Route path="/random-edit">
              <RandomEdit randomData={this.props.randomData} handleUpdateRandom={this.props.handleUpdateRandom}/>
            </Route>
            </Switch>
            </Router>
            <p onClick={() => {
                this.props.handleDeleteRandom(this.props.randomData.id)
            }}>delete</p>

            </div>
            </article>
        )
    }
}
// =============================
// EXPORT
// =============================
export default Random
