import React from 'react'

import Navigation from './components/Main/Navigation';
import Routes from './components/Main/Routes';

import { BrowserRouter as Router } from "react-router-dom";

const App = props => {

    let content = (
        <Router>
            <div>
                <Navigation/>
                <Routes/>
            </div>
        </Router>

    );
    return content;
}


export default App
