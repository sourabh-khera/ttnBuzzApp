/**
 * Created by sourabh on 9/5/17.
 */
import {reduxMiddlware} from "../middlewares/index"
import {applyMiddleware, createStore,combineReducers} from "redux"
import {postReducer,userReducer} from "../reducer/index"


const middlewares = applyMiddleware(...reduxMiddlware);
// const reducers=combineReducers({
//     userDetailsReducer:userReducer,
//     postCreateReducer:postReducer,
// })
 const store = createStore(postReducer, middlewares);
export default store;
