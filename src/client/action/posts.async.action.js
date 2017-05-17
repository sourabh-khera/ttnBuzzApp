/**
 * Created by sourabh on 9/5/17.
 */
import {
    createPostStarted,
    createPostSuccess,
    createPostFailure,
    fetchPostStarted,
    fetchPostSuccess,
    fetchPostFailure,
    createLikeAndDislikeStarted,
    createLikeAndDislikeSuccess,
    createLikeAndDislikeFailure,
    createCommentStarted,
    createCommentSuccess,
    createCommentFailure,
    fetchLikesAndDislikeStarted,
    fetchLikesAndDislikeSuccess,
    fetchLikesAndDislikeFailure
} from "./posts.actions"
import fetch from "isomorphic-fetch";

export const createPost = (postData) => {
    return (dispatch) => {
        dispatch(createPostStarted());
        fetch("http://localhost:3000/post", {
            credentials: "include",
            method: "post",
            body: postData,
        })
            .then(response => response.json())
            .then(data => {
                dispatch(createPostSuccess(data.posts))
            }).catch((err) => {
            dispatch(createPostFailure(err))
        })
    }
};


export const fetchPostDetails = () => {

    return (dispatch) => {
        dispatch(fetchPostStarted());
        fetch("http://localhost:3000/post", {
            credentials: "include",
            method: "get",
        })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchPostSuccess(data.posts))
            }).catch((err) => {
            dispatch(fetchPostFailure(err))
        })
    }
};

export const createLikes =(postid,status)=>{
    return (dispatch) => {
        dispatch(createLikeAndDislikeStarted());
        fetch("http://localhost:3000/like", {
            credentials: "include",
            method: "post",
            headers:{'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify({data:postid,status:status})
        })
            .then(response => response.json())
            .then(numofLikes=> {
                dispatch(createLikeAndDislikeSuccess(numofLikes.data))
            }).catch((err) => {
            dispatch(createLikeAndDislikeFailure(err))
        })
    }
};


export const fetchLikesAndDiislikesDetails = () => {

    return (dispatch) => {
        dispatch(fetchLikesAndDislikeStarted());
        fetch("http://localhost:3000/like", {
            credentials: "include",
            method: "get",
        })
            .then(response => response.json())
            .then(postLikes => {
                dispatch(fetchLikesAndDislikeSuccess(postLikes.data))
            }).catch((err) => {
            dispatch(fetchLikesAndDislikeFailure(err))
        })
    }
};



export const createComment =(postid,comment)=>{
    return (dispatch) => {
        dispatch(createCommentStarted());
        fetch("http://localhost:3000/comment", {
            credentials: "include",
            method: "post",
            headers:{'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify({data:comment,id:postid})
        })
            .then(response => response.json())
            .then(numOfDislikes => {
                dispatch(createCommentSuccess())
            }).catch((err) => {
            dispatch(createCommentFailure(err))
        })
    }
};