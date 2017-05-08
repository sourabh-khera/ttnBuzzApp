import React from 'react'
import UserIcon from "../../assets/images/user-icon-png-pnglogocom.png"
import Guy from "../../assets/images/guy.jpg"
export default class Post extends React.Component {
    render () {
        return (
            <div>
                <div className="post">
                    <div className="postheader">
                        <img src={UserIcon} alt="User Image" />
                        <div className="user">
                                    <span className="Username">
                                        Sourabh Khera
                                    </span>
                            <div className="userDetails">
                                <span className="email">sourabh.khera@gmail.com</span>
                            </div>
                        </div>
                        <div className="status">
                            Lost n Found
                        </div>
                    </div>
                    <div className="postcontainer">
                        <div className="postimage">
                            <img src={Guy} alt="post image" />
                        </div>
                        <div className="postthoughts">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged.

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
                            <input type="text" placeholder="Type Here" />
                            <input type="submit" value="POST" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}