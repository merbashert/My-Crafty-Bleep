import React from 'react'

import { Switch, Route } from "react-router-dom";

import RandomPage from '../../components/Randoms/RandomPage.js'
import FabricPage from '../../components/Fabrics/FabricPage.js'
import NeedlePage from '../../components/Needles/NeedlePage.js'
import ZipperPage from '../../components/Zippers/ZipperPage.js'
import Home from '../../components/Main/Home.js'

const Routes = props => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/fabric">
                <FabricPage
                    baseUrl={props.baseUrl}
                    handleClose={props.handleClose}
                    handleShow={props.handleShow}
                    setShow={props.setShow}
                    show={props.show}
                    />
            </Route>
            <Route path="/random">
                <RandomPage
                    baseUrl={props.baseUrl}
                    handleClose={props.handleClose}
                    handleShow={props.handleShow}
                    setShow={props.setShow}
                    show={props.show}
                    />
            </Route>
            <Route path="/needles">
                <NeedlePage
                    baseUrl={props.baseUrl}
                    handleClose={props.handleClose}
                    handleShow={props.handleShow}
                    setShow={props.setShow}
                    show={props.show}
                    />
            </Route>
            <Route path="/zippers">
                <ZipperPage
                    baseUrl={props.baseUrl}
                    handleClose={props.handleClose}
                    handleShow={props.handleShow}
                    setShow={props.setShow}
                    show={props.show}
                    />
            </Route>
        </Switch>
    )
}

export default Routes
