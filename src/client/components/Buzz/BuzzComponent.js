import React from 'react'
import LeftComponent from "./Leftcomponent"
import CreateBuzz from "./Createbuzz"
import Post from "./Posts"
import Banner from "./Banner"
import Createcomplaint from "../complaints/createComplaint"
import {connect} from "react-redux"
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
        console.log("unmount-----------------");
        document.removeEventListener('scroll', this.pageEnd, true);
    }

    updateOnComplaint = () => {
        this.setState({edit: false})
    };
    updateOnBuzz = () => {
        this.setState({edit: true})
    };


    render() {
        return (
            <div className="Component">
                <Banner history={this.props.history}/>
                <div className="containers">
                    <LeftComponent updateOnComplaint={this.updateOnComplaint} updateOnBuzz={this.updateOnBuzz}/>

                    <div className="rightpanel">
                        {
                            (this.state.edit) ?
                                <div>
                                    <CreateBuzz/>
                                    {
                                        this.props.postData.map((post, i) => (
                                            <Post posts={post} key={i}/>
                                        ))
                                    }
                                </div>
                                : <Createcomplaint/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    postData: state.postReducer.postData,
});

export default connect(mapStateToProps)(Buzzcomponent)