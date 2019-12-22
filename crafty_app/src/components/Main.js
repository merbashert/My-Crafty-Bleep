import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// components
import RandomPage from './RandomPage.js'
import FabricPage from './FabricPage.js'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    console.log('this is for heroku');
}

class Main extends React.Component {
    constructor(props) {
        super(props)

    }



    // ==============
    // RENDER
    // ==============
    render () {
        return (
            <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fabric">Fabric</Link>
            </li>
            <li>
              <Link to="/random">Random</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/fabric">
            <FabricPage />
          </Route>
          <Route path="/random">
            <RandomPage />
          </Route>
        </Switch>
      </div>
    </Router>


        )
    }
} //end of Main component

// =============================
// EXPORT
// =============================
export default Main
