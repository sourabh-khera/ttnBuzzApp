
/**
 * Created by sourabh on 3/5/17.
 */
import React from "react"
import Login from "./components/Login"
import  "./css/login.css"
import "./css/banner.css"
import "./css/buzzComponent.css"
import "./css/profile.css"
import "./css/complaint.css"
import "./css/footer.css"
import "../server/public/views/error.css"
import {BrowserRouter as Router,Route} from "react-router-dom"
import BuzzComponent from "../client/components/Buzz/BuzzComponent"

export default class App extends React.Component{


        render(){
        return(
            <Router>
            <div>
                <Route exact path="/" component={Login}/>
                <Route path="/buzz" component={BuzzComponent}/>
            </div>
            </Router>
        )
    }
}

