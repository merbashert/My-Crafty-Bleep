import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    console.log('this is for herkoku');
}


const App = props => {

let content = (
    <Router>
    <div>

    <div className='nav-bar'>
    <p>
    <Link to="/">Home</Link>
    </p>
    <p>
    <Link to="/fabric">Fabric</Link>
    </p>
    <p>
    <Link to="/random">Random</Link>
    </p>
    <p>
    <Link to="/needles">Needles</Link>
    </p>
    </div>


    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/fabric">
    <FabricPage
    baseUrl={baseUrl}/>
    </Route>
    <Route path="/random">
    <RandomPage baseUrl={baseUrl}/>
    </Route>
    <Route path="/needles">
    <NeedlePage baseUrl={baseUrl}/>
    </Route>
    </Switch>
    </div>
    </Router>

);
return content;
}


export default App
