import React from "react"
import CreateBuzz from "../Buzz/Createbuzz"
import Post from "../Buzz/Posts"
import {connect} from "react-redux"
import ScrollUpButton from "react-scroll-up-button"

import {
    fetchPostDetails,
    fetchLikesAndDiislikesDetails,
    fetchCommentsDetails,
} from "../../action/index"

class Createpost extends React.Component {
    constructor() {
        super();
        this.state = {
            skip: 0,
            limit: 10,
        }
    }

    pageEnd = (event) => {
        if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
            this.setState({skip: this.state.skip + 10},() => {
                this.props.dispatch(fetchPostDetails(this.state.skip, this.state.limit))})
        }
    };

    componentDidMount() {
        const token=localStorage.getItem('token');
        document.addEventListener('scroll', this.pageEnd);
        if(!this.props.postData.length){
            this.props.dispatch(fetchPostDetails(this.state.skip, this.state.limit,token));
            this.props.dispatch(fetchLikesAndDiislikesDetails(token));
            this.props.dispatch(fetchCommentsDetails(token));
        }

    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.pageEnd, true);
    }
    render() {
        const renderPosts = this.props.postData.map((post, i) => (<Post posts={post} key={i}/>));
        return (
            <div>
                <ScrollUpButton />
                <CreateBuzz/>
                {renderPosts}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    postData: state.postReducer.postData,
});
export default connect(mapStateToProps)(Createpost)


