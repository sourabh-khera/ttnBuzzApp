import React from 'react'
import LeftComponent from "./Leftcomponent"
import Createpost from "./createPost"
import Banner from "./Banner"
import {connect} from "react-redux"
import Footer from "./Footer"
import Complaint from "../complaints/createComplaint"
import {Route} from "react-router-dom"

import {
    fetchPostDetails,
    fetchUserDetails,
    fetchLikesAndDiislikesDetails,
    fetchCommentsDetails,
    fetchComplaint,
} from "../../action/index"


class Buzzcomponent extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: true,
            value: "",
            skip: 0,
            limit: 10,
        }
    }
    pageEnd = (event) => {
        if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
            this.setState({skip: this.state.skip + 10}, () => {
                this.props.dispatch(fetchPostDetails(this.state.skip + 10, this.state.limit));
            })
        }
    };
    componentDidMount() {
        let email;
        const emailCookieString = document.cookie.split(',').find((cookie) => cookie.includes('username'));
        if (emailCookieString) {
            email = emailCookieString.split('=')[1]
        }
        if (email) {
            document.addEventListener('scroll', this.pageEnd);
            this.props.dispatch(fetchUserDetails());
            this.props.dispatch(fetchPostDetails(this.state.skip, this.state.limit));
            this.props.dispatch(fetchLikesAndDiislikesDetails());
            this.props.dispatch(fetchCommentsDetails());
            this.props.dispatch(fetchComplaint());
        } else {
            this.props.history.push('/')
        }

    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.pageEnd, true);
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
const mapStateToProps = (state) => ({
    postData: state.postReducer.postData,
});

export default connect(mapStateToProps)(Buzzcomponent)