
import React from 'react'
import RandomEdit from './RandomEdit'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Random = props => {



        return (
            <article>
            <div className="random-box">
            <p>{props.randomData.name}<br/>
            {(props.randomData.details)}</p>
            <Router>
            <Link to="/random-edit">Edit</Link>
            <Switch>
            <Route path="/random-edit">
              <RandomEdit randomData={props.randomData} handleUpdateRandom={props.handleUpdateRandom}/>
            </Route>
            </Switch>
            </Router>
            <p onClick={() => {
                props.handleDeleteRandom(props.randomData.id)
            }}>delete</p>

            </div>
            </article>
        )

}


export default Random
