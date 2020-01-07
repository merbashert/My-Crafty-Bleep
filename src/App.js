import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png'

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
    baseUrl = 'https://mycraftybleep-back.herokuapp.com'
}


const App = props => {

let content = (
    <Router>
    <div>

    <Navbar className='nav-bar' sticky="top">
    <Navbar.Brand><div className='logo'><img src={logo}/></div></Navbar.Brand>
    <div>
    <Link to="/">Home</Link>
    </div>
    <div>
    <Link to="/fabric">Fabric</Link>
    </div>
    <div>
    <Link to="/random">Random</Link>
    </div>
    <div>
    <Link to="/needles">Needles</Link>
    </div>
    </Navbar>


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
