import React from 'react'
import UserIcon from "../../assets/images/user-icon-png-pnglogocom.png"
import Guy from "../../assets/images/guy.jpg"
import {connect} from "react-redux"
import {createLikes,createDisLikes,createComment} from "../../action/index"
class Post extends React.Component {

    constructor(){
        super();
        this.state={
            disableLike:false,
            disableDisLike:false,
            commentTextArea:false,
            commentBody:"",
        }
    }

    likes=(postid,status)=>{
        this.setState({ disableLike: true },()=>{this.setState({disableDisLike:false})});
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
        this.props.dispatch(createComment(comment,postid))
        this.setState({commentBody:""})
    };

    render () {
         const Likes=0;
         const dislikes=0;
         const LikeAndDislike=this.props.LikeAndDislikeData;
        const { disableLike, disableDisLike } = this.state;
        const buzzDetails = this.props.postData.map((post, i) => {
                const postBody = post.postBody;
                const postImageUrl =  post.image;

                return (
                <div key={i}>
                    <div className="post">
                        <div className="postheader">
                            <div>
                                <img src={post.postedBy.image} alt="User Image"/>
                                <div className="user">
                            <span className="Username">
                                {post.postedBy.name}
                            </span>
                                    <div className="userDetails">
                                        <span className="email">{post.postedBy.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="status">
                                {post.status}
                            </div>
                        </div>
                        <div className="postcontainer">

                            <div className="postthoughts">
                                <p>
                                    {postBody}
                                </p>
                            </div>
                            {
                                (postImageUrl)?
                                <div className="postimage">
                                    <img src={"/upload/" + postImageUrl}/>
                                </div>:<span></span>
                            }
                        </div>
                        <div className="postfooter">
                            <div className="likediscom">
                                <span  className="glyphicon glyphicon-thumbs-up" onClick={disableLike ? () => {} : ()=>this.likes(post._id,"liked")}></span><span></span>
                                <span  className="glyphicon glyphicon-thumbs-down" onClick={disableDisLike ?()=>{}: ()=>this.disLikes(post._id,"disliked")}></span><span></span>
                                <span className="glyphicon glyphicon-comment" onClick={this.toggleComment}></span>
                            </div>
                            {
                                (this.state.commentTextArea)?
                                    <div className="postcomment">
                                        <input value={this.state.commentBody} type="text" placeholder="Type Here" onChange={this.onchange} />
                                        <button className="commentButton" onClick={()=>this.postComment(this.state.commentBody,post._id)}>POST</button>
                                    </div>
                                    :
                                    <span></span>


                            }

                        </div>
                    </div>
                </div>)
            });
        return (
            <div>
                {buzzDetails}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    postData: state.postData,
    LikeAndDislikeData:state.LikeAndDislikeData
});

export default connect(mapStateToProps)(Post)
