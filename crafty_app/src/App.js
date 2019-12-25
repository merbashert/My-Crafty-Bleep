import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import RandomPage from './components/RandomPage.js'
import FabricPage from './components/FabricPage.js'
import NeedlePage from './components/NeedlePage.js'
import Home from './components/Home.js'

let baseUrl = '';


const App = props => {
    const [baseUrl, setBaseUrl] = useState('http://localhost:8888')

    //define state in constructor add url if statement


//     if (process.env.NODE_ENV === 'development') {
//         baseUrl: 'http://localhost:8888'
//     } else {
//         console.log('this is for heroku');
//     }


let content = (
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
    <li>
    <Link to="/needles">Needles</Link>
    </li>
    </ul>
    </nav>

    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/fabric">
    <FabricPage
    baseUrl={baseUrl} />
    </Route>
    <Route path="/random">
    <RandomPage baseUrl={baseUrl}/>
    </Route>
    <Route path="/needles">
    <NeedlePage baseUrl={baseUrl} />
    </Route>
    </Switch>
    </div>

    </Router>

);
return content;
}


export default App
