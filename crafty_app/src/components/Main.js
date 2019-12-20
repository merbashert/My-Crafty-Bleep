import React from 'react'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    console.log('this is for heroku');
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fabrics: []
        }
    }
    render() {
        return(
            <h1>{this.props.view.pageTitle}</h1>
        )
    }
}

export default Main
