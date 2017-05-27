import React from "react"
import {connect} from "react-redux"
class Viewprofile extends React.Component {
    render() {
        const userDetails = this.props.userData;
        const LikesDetails = this.props.LikesAndDislikeData;
        const commentsDetails = this.props.commentsData;
        const individualUserLikesCount = LikesDetails.filter((likes) => likes.likedBy._id === userDetails._id && likes.status === "liked").length;
        const individualUserDislikesCount = LikesDetails.filter((dislikes) => dislikes.likedBy._id === userDetails._id && dislikes.status === "disliked").length;
        const userCommentsCount = commentsDetails.filter((comments) => comments.userId._id === userDetails._id).length;
        return (
            <div className="container">
                <div class="row">
                    <div className="col-sm-6 user-panel">
                        <div className="row">
                            <div className="col-sm-6 left-panel">
                                <img src={userDetails.image} alt="no image"/>
                                <div className="`company-name">
                                    To The New
                                </div>
                            </div>
                            <div className="col-sm-6 right-panel">
                                <div className="user-details">
                                    <h4>{userDetails.name}</h4>
                                    <h5>{userDetails.email}</h5>
                                </div>
                                <div className="user-info">
                                    <ul>
                                        <li>
                                            <span className="title">Like</span>
                                            <span className="counter">{individualUserLikesCount}</span>
                                        </li>
                                        <li>
                                            <span className="title">Dislike</span>
                                            <span className="counter">{individualUserDislikesCount}</span>
                                        </li>
                                        <li>
                                            <span className="title">Comments</span>
                                            <span className="counter">{userCommentsCount}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userData: state.userReducer.userData,
    LikesAndDislikeData: state.LikesAndDislikesReducer.LikeAndDislikeData,
    commentsData: state.commentsReducer.commentsData,
});

export default connect(mapStateToProps)(Viewprofile)