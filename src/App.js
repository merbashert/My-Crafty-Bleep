import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/logo.png'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RandomPage from './components/Randoms/RandomPage.js'
import FabricPage from './components/Fabrics/FabricPage.js'
import NeedlePage from './components/Needles/NeedlePage.js'
import ZipperPage from './components/Zippers/ZipperPage.js'
import Home from './components/Home.js'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    baseUrl = 'https://mycraftybleep-back.herokuapp.com'
}


const App = props => {

    const [expanded, setExpanded] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = (e) => {
        setShow(true)
    }

    let content = (
        <Router>
            <div>
                <Navbar className='nav-bar' sticky="top" expand="lg" expanded={expanded}>
                    <Navbar.Brand><div className='logo'><img src={logo} alt='logo'/></div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <div className='navlink'>
                                <Link to="/">Home</Link>
                            </div>
                            <div className='navlink'>
                                <Link to="/fabric" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Fabric</Link>
                            </div>
                            <div className='navlink'>
                                <Link to="/random" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Random</Link>
                            </div>
                            <div className='navlink'>
                                <Link to="/needles" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Needles</Link>
                            </div>
                            <div className='navlink'>
                                <Link to="/zippers" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Zippers</Link>
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/fabric">
                        <FabricPage
                            baseUrl={baseUrl}
                            handleClose={handleClose}
                            handleShow={handleShow}
                            setShow={setShow}
                            show={show}
                            />
                    </Route>
                    <Route path="/random">
                        <RandomPage
                            baseUrl={baseUrl}
                            handleClose={handleClose}
                            handleShow={handleShow}
                            setShow={setShow}
                            show={show}
                            />
                    </Route>
                    <Route path="/needles">
                        <NeedlePage
                            baseUrl={baseUrl}
                            handleClose={handleClose}
                            handleShow={handleShow}
                            setShow={setShow}
                            show={show}
                            />
                    </Route>
                    <Route path="/zippers">
                        <ZipperPage
                            baseUrl={baseUrl}
                            handleClose={handleClose}
                            handleShow={handleShow}
                            setShow={setShow}
                            show={show}
                            />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
    return content;
}


export default App
