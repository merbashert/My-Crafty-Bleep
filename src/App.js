import React, { useState } from 'react'



import Navigation from './components/Main/Navigation';
import Routes from './components/Main/Routes';

import { BrowserRouter as Router } from "react-router-dom";

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    baseUrl = 'https://mycraftybleep-back.herokuapp.com'
}


const App = props => {

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


                <Navigation/>
                <Routes
                    baseUrl={baseUrl}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    setShow={setShow}
                    show={show}
                    />
            </div>
        </Router>

    );
    return content;
}


export default App
