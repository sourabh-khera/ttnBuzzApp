import React from 'react'
import LeftComponent from "./Leftcomponent"
import Createpost from "./createPost"
import Banner from "./Banner"
import Footer from "./Footer"
import Complaint from "../complaints/createComplaint"
import { Route } from "react-router-dom"
import { fetchUserDetails } from "../../action/index"
import authenticate from '../HOC/authenticate'

class BuzzComponent extends React.Component {
    componentDidMount() {
        let token;
        const tokenString = document.cookie.split(',').find((cookie) => cookie.includes('token'));
        if (tokenString) {
            token = tokenString.split('=')[1];
        }
        if (token) {
          this.props.dispatch(fetchUserDetails(token));
          localStorage.setItem('token',token);
        } else {
            this.props.history.push('/')
        }
    }
    render() {

        return (
            <div className="Component">
                <Banner history={this.props.history}/>
                <div className="mainPanel">
                    <div className="left-part">
                        <LeftComponent/>
                    </div>
                    <div className="right-part">
                        <Route path="/buzz/create-post" component={authenticate(Createpost)}/>
                        <Route path="/buzz/complaints" component={authenticate(Complaint)}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default BuzzComponent