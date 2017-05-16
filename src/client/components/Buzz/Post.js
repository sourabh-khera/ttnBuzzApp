import React from 'react'
import UserIcon from "../../assets/images/user-icon-png-pnglogocom.png"
import Guy from "../../assets/images/guy.jpg"
import {connect} from "react-redux"
import {createLikes,createDisLikes} from "../../action/index"
class Post extends React.Component {

    state = {};

    likes=(postid,status)=>{
        this.setState({ disableLike: true },()=>{this.setState({disableDisLike:false})});
        this.props.dispatch(createLikes(postid,status))
    };

    disLikes=(postid,status)=>{
        this.setState({disableDisLike:true},()=>{this.setState({disableLike:false})});
        this.props.dispatch(createDisLikes(postid,status))
    };
    render () {
        const { disableLike, disableDisLike } = this.state;
        const buzzDetails = this.props.postData.map((post, i) => {
        const postBody = post.postBody;
        const postImageUrl =  post.image;
        const likes=this.props.likes;
        const dislikes=this.props.disLikes;
        console.log("props-------------",this.props)
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
                            <span  className="glyphicon glyphicon-thumbs-up" onClick={disableLike ? () => {} : ()=>this.likes(post._id,"liked")}></span><span>{likes}</span>
                            <span  className="glyphicon glyphicon-thumbs-down" onClick={disableDisLike ?()=>{}: ()=>this.disLikes(post._id,"disliked")}></span><span>{dislikes}</span>
                            <span className="glyphicon glyphicon-comment"></span>
                        </div>
                        <div className="postcomment">
                            <input type="text" placeholder="Type Here"/>
                            <input type="submit" value="POST"/>
                        </div>
                    </div>
                </div>
            </div>)
        })
        return (
            <div>
                {buzzDetails}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    postData: state.postData,
    likes:state.likes,
    disLikes:state.disLikes
})

export default connect(mapStateToProps)(Post)
