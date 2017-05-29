/**
 * Created by sourabh on 3/5/17.
 */

import React from "react"
import LoginImg1 from "../assets/images/fun-ttn-d.jpg"
import LoginImg2 from "../assets/images/tothenew.jpg"
import LoginImg3 from "../assets/images/google3.png"
import {link} from "react-router-dom"

export default class Login extends React.Component {
    render() {
        return (
            <div className="loginParentContainer">
                <img className="loginImg1" src={LoginImg1}/>
                <div className="loginChildContainer1">
                    <div className="loginChildContainer2">
                        <img src={LoginImg2} className="loginImg2"/>
                        <h3>Create Your Own Buzz</h3>
                        <a href="/login/google"><img src={LoginImg3}/></a>
                    </div>
                </div>

            </div>
        )
    }
}

