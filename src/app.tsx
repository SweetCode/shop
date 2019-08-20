import { Provider } from 'mobx-react';
import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import * as store from './store/Index'

import routes from './router/router'

import './style/bootstrap/bootstrap.scss'

export default (() =>{
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        {
                            routes.map((ele,ind)=>{
                                return (
                                    <Route path={ele.path} component={ele.component} exact={ele.exact} key={ind} name={ele.name}/>
                                )
                            })
                        }
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    )
})