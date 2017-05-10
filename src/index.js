/**
 * Created by sourabh on 3/5/17.
 */

import {render} from "react-dom"
import App from "./client/app"
import React from "react"
import store from "./client/store"
import {Provider} from "react-redux"
render(
    <Provider store={store} >
    <App/>
    </Provider>,document.getElementById("app")
 );
