import React from 'react'
import UserIcon from "../../assets/images/user-icon-png-pnglogocom.png"
import Guy from "../../assets/images/guy.jpg"
import {connect} from "react-redux"
import {createLikes,createDisLikes,createComment} from "../../action/index"
class Post extends React.Component {

    constructor(){
        super();
        this.state = {
            disableLike:false,
            disableDisLike:false,
            commentTextArea:false,
            commentBody:"",
        }
    }

    likes = (postid,status)=>{
        this.setState({ disableLike: true, disableDisLike:false });
        this.props.dispatch(createLikes(postid,status))
    };

    disLikes=(postid,status)=>{
        this.setState({disableDisLike:true},()=>{this.setState({disableLike:false})});
        this.props.dispatch(createLikes(postid,status))
    };

    toggleComment=()=>{
        this.setState({commentTextArea:true})
    };

    onchange=(event)=>{
        this.setState({commentBody:event.target.value})
    };

    postComment=(comment,postid)=>{
        this.props.dispatch(createComment(comment,postid));
        this.setState({commentBody:""})
    };

    render () {
        const LikeAndDislike = this.props.LikeAndDislikeData;
        const { disableLike, disableDisLike } = this.state;
        const likes = LikeAndDislike.filter((like) => like.postId === this.props.posts._id && like.status === 'liked').length;
        const dislikes = LikeAndDislike.filter((like) => like.postId === this.props.posts._id && like.status === 'disliked').length;
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
                                (this.props.posts.image)?
                                    <div className="postimage">
                                        <img src={"/upload/" + this.props.posts.image}/>
                                    </div>:<span></span>
                            }
                        </div>

                        <div className="postfooter">
                            <div className="likediscom">
                                <span  className="glyphicon glyphicon-thumbs-up" onClick={disableLike ? () => {} : ()=>this.likes(this.props.posts._id,"liked")}></span><span>{likes}</span>
                                <span  className="glyphicon glyphicon-thumbs-down" onClick={disableDisLike ?()=>{}: ()=>this.disLikes(this.props.posts._id,"disliked")}></span><span>{dislikes}</span>
                                <span className="glyphicon glyphicon-comment" onClick={this.toggleComment}></span>
                            </div>
                            {
                                (this.state.commentTextArea)?
                                    <div className="postcomment">
                                        <input value={this.state.commentBody} type="text" placeholder="Type Here" onChange={this.onchange} />
                                        <button className="commentButton" onClick={()=>this.postComment(this.state.commentBody,this.props.posts._id)}>POST</button>
                                    </div>
                                    :
                                    <span></span>
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    LikeAndDislikeData:state.LikeAndDislikeData
});

export default connect(mapStateToProps)(Post)
