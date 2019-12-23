// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
import RandomForm from './RandomForm'
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
    // ==============
    // RENDER
    // ==============
    render () {

        return (
            <article>
            <div className="random-box">
            <p>{this.props.randomData.name} ({this.props.randomData.details})</p>
            <Router>
            <Link to="/random-form">Edit</Link>
            <Switch>
            <Route path="/random-form">
              <RandomForm randomData={this.props.randomData}/>
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
