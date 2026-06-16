import React from 'react'

import Navigation from './components/Main/Navigation';
import Routes from './components/Main/Routes';

import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <Navigation/>
            <Routes/>
        </div>
    </Router>
)


export default App
