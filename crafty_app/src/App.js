import React from 'react';

import Main from './components/Main.js'
import Aside from './components/Aside.js'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formInputs: null
        }
    }



    render () {
        return (
            <div>
            <Main
            formInputs={this.state.formInputs}
            randomData={this.state.randomData}
            fabricData={this.state.fabricData}
            />
            </div>
        )
    }
}


export default App
