import React from 'react'
import UserIcon from "../../assets/images/user-icon-png-pnglogocom.png"
import Guy from "../../assets/images/guy.jpg"
import {connect} from "react-redux"
class Post extends React.Component {
    render () {
        const buzzDetails = this.props.postData.map((post, i) => {
        const postBody = post.postBody
        const postImageUrl =   post.image

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
})

export default connect(mapStateToProps)(Post)
