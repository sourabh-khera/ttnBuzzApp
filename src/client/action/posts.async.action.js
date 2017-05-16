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
    createLikeStarted,
    createLikeSuccess,
    createLikeFailure,
    createDislikeStarted,
    createDislikeSuccess,
    createDislikeFailure
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
        dispatch(createLikeStarted());
        fetch("http://localhost:3000/like", {
            credentials: "include",
            method: "post",
            headers:{'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify({data:postid,status:status})
        })
            .then(response => response.json())
            .then(countLikes => {
                dispatch(createLikeSuccess(countLikes))
            }).catch((err) => {
            dispatch(createLikeFailure(err))
        })
    }
};



export const createDisLikes =(postid,status)=>{
    return (dispatch) => {
        dispatch(createDislikeStarted());
        fetch("http://localhost:3000/like", {
            credentials: "include",
            method: "post",
            headers:{'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify({data:postid,status:status})
        })
            .then(response => response.json())
            .then(numOfDislikes => {
                dispatch(createDislikeSuccess(numOfDislikes))
            }).catch((err) => {
            dispatch(createDislikeFailure(err))
        })
    }
};