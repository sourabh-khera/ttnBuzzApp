import React from 'react'
import UserIcon from "../../assets/images/user-icon-png-pnglogocom.png"
import Guy from "../../assets/images/guy.jpg"
import {connect} from "react-redux"

const defaultImageUrl = 'http://webneel.com/sites/default/files/images/project/create-user%20avator-icon%20(12).jpg';

class Post extends React.Component {
    render () {
        const userDetails = this.props.postData.map((post, i) => {
            const postBody = post.postBody || null
            const postImageUrl = post.image || defaultImageUrl
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
                                Lost n Found
                            </div>
                        </div>
                        <div className="postcontainer">
                            <div className="postimage">
                                <img src={postImageUrl} alt="post image"/>
                            </div>
                            <div className="postthoughts">
                                <p>
                                    {postBody}
                                </p>
                            </div>
                        </div>
                        <div className="postfooter">
                            <div className="likediscom">
                                <a href="#">Like</a>
                                <a href="#">Dislike</a>
                                <a href="#">Comment</a>
                            </div>
                            <div className="postcomment">
                                <input type="text" placeholder="Type Here"/>
                                <input type="submit" value="POST"/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {userDetails}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    postData: state.postData,
})

export default connect(mapStateToProps)(Post)
