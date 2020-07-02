import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo.png';

import { Link } from "react-router-dom";

const Navigation = props => {

    const [expanded, setExpanded] = useState(false);

    return (
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
    )
}

export default Navigation;
