import Main from './pages/main/main'

import { Provider } from 'mobx-react';
import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import * as store from './store/index'

import './style/bootstrap/bootstrap.scss'

export default (() =>{
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        {/* <Route path="/sayhello" component={()=><Main/>} /> */}
                        <Route path="/" component={()=><Main/>} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    )
})