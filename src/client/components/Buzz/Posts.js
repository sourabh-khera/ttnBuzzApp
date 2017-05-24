import React from 'react'
import {connect} from "react-redux"
import {createLikesAndDislikes, createComment} from "../../action/index"
import {Popover,OverlayTrigger} from "react-bootstrap"
class Post extends React.Component {

    constructor() {
        super();
        this.state = {
            disableLike: false,
            disableDisLike: false,
            commentTextArea: false,
            toggle: false,
            commentBody: "",
        }
    }

    likes = (postid, status) => {
        this.setState({disableLike: true, disableDisLike: false});
        this.props.dispatch(createLikesAndDislikes(postid, status))
    };

    disLikes = (postid, status) => {
        this.setState({disableDisLike: true}, () => {
            this.setState({disableLike: false})
        });
        this.props.dispatch(createLikesAndDislikes(postid, status))
    };

    toggleComment = () => {
        this.setState({
            commentTextArea: !this.state.toggle,
            toggle: !this.state.toggle
        }, () => {
            if (this.nameInput) {
                this.nameInput.focus();
            }
        })
    };
    onchange = (event) => {
        this.setState({commentBody: event.target.value})
    };
    postComment = (comment, postid) => {
        this.props.dispatch(createComment(comment, postid));
        this.setState({commentBody: "", commentTextArea: false})
    };
    render() {
        const LikeAndDislike = this.props.LikeAndDislikeData;
        const {disableLike, disableDisLike} = this.state;
        const likes = LikeAndDislike.filter((like) => like.postId === this.props.posts._id && like.status === 'liked').length;
        const peopleWhoLikes = LikeAndDislike.filter((like) => like.postId === this.props.posts._id && like.status === 'liked');
        const dislikes = LikeAndDislike.filter((like) => like.postId === this.props.posts._id && like.status === 'disliked').length;
        const peopleWhoDisLikes = LikeAndDislike.filter((like) => like.postId === this.props.posts._id && like.status === 'disliked');
        const comments = this.props.commentsData;
        const popoverhoverlikes=(
            <Popover id="popover-hover-like">
                {
                    peopleWhoLikes.map((items,i)=>(
                        <div className="row comment-box" key={i}>
                            <div className="col-md-3 pull-left">
                                <img src={items.likedBy.image} className="image-responsive"/></div>
                            <div className="col-md-8 pull-right item_name">
                                <h5>{items.likedBy.name}</h5>
                            </div>
                        </div>
                        ))
                }
            </Popover>
        );
        const popoverhoverdislikes=(
            <Popover id="popover-hover-dislike">
                {
                    peopleWhoDisLikes.map((items,i)=>(
                        <div className="row comment-box" key={i}>
                            <div className="col-md-3 pull-left">
                                <img src={items.likedBy.image} className="image-responsive"/></div>
                            <div className="col-md-8 pull-right item_name">
                                <h5>{items.likedBy.name}</h5>
                            </div>
                        </div>
                    ))
                }
            </Popover>
        );
        return (
            <div>
                <div>
                    <div className="post">
                        <div className="postheader">
                            <div>
                                <img src={this.props.posts.postedBy.image} alt="User Image"/>
                                <div className="user">
                            <span className="Username">
                                {this.props.posts.postedBy.name}
                            </span>
                                    <div className="userDetails">
                                        <span className="email">{this.props.posts.postedBy.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="status">
                                {this.props.posts.status}
                            </div>
                        </div>
                        <div className="postcontainer">

                            <div className="postthoughts">
                                <p>
                                    {this.props.posts.postBody}
                                </p>
                            </div>
                            {
                                (this.props.posts.image) ?
                                    <div className="postimage">
                                        <img src={"/upload/" + this.props.posts.image}/>
                                    </div> : null
                            }
                        </div>

                        <div className="postfooter">
                                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverhoverlikes}>
                                <span className="glyphicon glyphicon-thumbs-up icon-success" onClick={disableLike ? () => {
                                    } : () => this.likes(this.props.posts._id, "liked")}></span>
                                </OverlayTrigger><span>{likes}</span>
                                <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverhoverdislikes}>
                                <span className="glyphicon glyphicon-thumbs-down icon-warning" onClick={disableDisLike ? () => {
                                    } : () => this.disLikes(this.props.posts._id, "disliked")}></span>
                                </OverlayTrigger><span>{dislikes}</span>
                                <span className="glyphicon glyphicon-comment icon-comment" onClick={this.toggleComment}></span>
                            </div>
                            {
                                (this.state.commentTextArea) ?
                                    <div className="postcomment">
                                        <textarea className="comment-area" ref={(input) => this.nameInput = input }
                                                  value={this.state.commentBody} type="text" placeholder="Type Here"
                                                  onChange={this.onchange}/>
                                        <button className="commentButton"
                                                onClick={() => this.postComment(this.state.commentBody, this.props.posts._id)}>
                                            POST
                                        </button>
                                    </div>
                                    : null
                            }

                            {
                                comments.map((items, i) => (
                                    (items.postId === this.props.posts._id) ?
                                        <div className="row comment-box" key={i}>
                                            <div className="col-md-1 pull-left">
                                                <img src={items.userId.image} className="image-responsive"/></div>
                                            <div className="col-md-11 pull-right">
                                                <h5>{items.userId.name}</h5>
                                                <p className="comments">{items.commentBody}</p>
                                            </div>
                                        </div>
                                        : null
                                ))}
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    LikeAndDislikeData: state.LikesAndDislikesReducer.LikeAndDislikeData,
    commentsData: state.commentsReducer.commentsData
});

export default connect(mapStateToProps)(Post)
