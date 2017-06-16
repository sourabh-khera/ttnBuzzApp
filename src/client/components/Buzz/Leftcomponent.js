import React from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
class Leftcomponent extends React.Component {
    render() {
        const userDetails = this.props.userData;
        const LikesDetails = this.props.LikesAndDislikeData;
        const commentsDetails = this.props.commentsData;
        const individualUserLikesCount = LikesDetails.filter((likes) => likes.likedBy._id === userDetails._id && likes.status === "liked").length;
        const individualUserDislikesCount = LikesDetails.filter((dislikes) => dislikes.likedBy._id === userDetails._id && dislikes.status === "disliked").length;
        const userCommentsCount = commentsDetails.filter((comments) => comments.userId._id === userDetails._id).length;
        return (
            <div>
                <div>

                    <div className="userProfile">
                        <div className="userimage">
                            <img src={userDetails.image} alt="no image" />
                        </div>
                        <div className="usercontent">
                            <ul>
                                <li>
                                    <b>Like</b>
                                    <span className="totalLikes">{individualUserLikesCount}</span>
                                </li>
                                <li>
                                    <b>Dislike</b>
                                    <span className="totaldislikes">{individualUserDislikesCount}</span>
                                </li>
                                <li>
                                    <b>Comments</b>
                                    <span className="totalcommets">{userCommentsCount}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <div className="buzzCom">
                            <ul>
                                <Link to="/buzz/create-post">
                                    <li>BUZZ</li>
                                </Link>
                                <Link to="/buzz/complaints" >
                                    <li>COMPLAINTS</li>
                                </Link>
                            </ul>
                            </div>
                        <div className="leftfooter">
                            <p>&copy;&nbsp;&nbsp;2017 To The New Digital</p>
                            {/*<ul>*/}
                                {/*<li><a href="#">About</a></li>*/}
                                {/*<li><a href="#">Help</a></li>*/}
                            {/*</ul>*/}
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

export default connect(mapStateToProps)(Leftcomponent)