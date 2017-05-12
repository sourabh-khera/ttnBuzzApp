/**
 * Created by sourabh on 3/5/17.
 */

import {render} from "react-dom"
import App from "./app"
import React from "react"
import store from "./store/index"
import {Provider} from "react-redux"
const app=document.getElementById("app")
render(
    <Provider store={store} >
        <App/>
    </Provider>,app
 );
