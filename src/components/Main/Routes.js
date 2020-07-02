import React, { useState } from 'react'

import { Switch, Route } from "react-router-dom";

import RandomPage from '../../components/Randoms/RandomPage.js'
import FabricPage from '../../components/Fabrics/FabricPage.js'
import NeedlePage from '../../components/Needles/NeedlePage.js'
import ZipperPage from '../../components/Zippers/ZipperPage.js'
import Home from '../../components/Main/Home.js'

const Routes = props => {

    let baseUrl = '';
    if (process.env.NODE_ENV === 'development') {
        baseUrl = 'http://localhost:8888'
    } else {
        baseUrl = 'https://mycraftybleep-back.herokuapp.com'
    }

    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = (e) => {
        setShow(true)
    }


    return(
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
    )
}

export default Routes
