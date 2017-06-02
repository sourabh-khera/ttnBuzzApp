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
    fetchPostDetails,
    fetchLikesAndDiislikesDetails,
    fetchCommentsDetails,
} from "../../action/index"


class Buzzcomponent extends React.Component {
    componentDidMount() {
        let email;
        const emailCookieString = document.cookie.split(',').find((cookie) => cookie.includes('username'));
        if (emailCookieString) {
            email = emailCookieString.split('=')[1]
        }
        if (email) {
            this.props.dispatch(fetchUserDetails());
            this.props.dispatch(fetchPostDetails(this.state.skip, this.state.limit));
            this.props.dispatch(fetchLikesAndDiislikesDetails());
            this.props.dispatch(fetchCommentsDetails());
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
                        <Route path="/buzz/create-post" component={Createpost}/>
                        <Route path="/buzz/complaints" component={Complaint}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default connect()(Buzzcomponent)