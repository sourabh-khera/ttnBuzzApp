/**
 * Created by sourabh on 9/5/17.
 */
import {reduxMiddlware} from "../middlewares/index"
import {applyMiddleware, createStore} from "redux"
import reducer from "../reducer/index"


const middlewares = applyMiddleware(...reduxMiddlware);
const store = createStore(reducer, middlewares);
export default store;
