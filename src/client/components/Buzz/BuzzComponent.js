import React from 'react'
import LeftComponent from "./Leftcomponent"
import Createpost from "./createPost"
import Banner from "./Banner"
import {connect} from "react-redux"
import Footer from "./Footer"
import Complaint from "../complaints/createComplaint"
import {Route} from "react-router-dom"
import {
    fetchUserDetails,
} from "../../action/index"
let jwt_token;

class Buzzcomponent extends React.Component {
    componentDidMount() {
        let token;
        const tokenString = document.cookie.split(',').find((cookie) => cookie.includes('token'));
        if (tokenString) {
            token = tokenString.split('=')[1];
            jwt_token=token;
        }
        if (token) {
            this.props.dispatch(fetchUserDetails(token));
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
                        <Route path="/buzz/create-post" render={(props)=><{...props} token={jwt_token} Createpost/>}/>
                        <Route path="/buzz/complaints" component={Complaint}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default connect()(Buzzcomponent)