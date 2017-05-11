/**
 * Created by sourabh on 9/5/17.
 */
import {
    createPostStarted,
    createPostSuccess,
    createPostFailure,
    // fetchUserStarted,
    // fetchUserSuccess,
    // fetchUserFailure,
    fetchPostStarted,
    fetchPostSuccess,
    fetchPostFailure
} from "./actions"
import fetch from "isomorphic-fetch"

export const createPost = (postData) => {

    return (dispatch) => {
        dispatch(createPostStarted())
        fetch("http://localhost:3000/post", {
            credentials: "include",
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(data => {
                dispatch(createPostSuccess(data.posts))
            }).catch((err) => {
            dispatch(createPostFailure(err))
        })
    }
}


export const fetchUserDetails = (userData) => {

    return (dispatch) => {
        dispatch(createStarted())
        fetch("http://localhost:3000/post", {
            credentials: "include",
            method: "get",
        })
            .then(response => response.json())
            .then(userData => {
                dispatch(createPostSuccess(userData))
            }).catch((err) => {
            dispatch(createPostFailure(err))
        })
    }
}


export const fetchPostDetails = () => {

    return (dispatch) => {
        dispatch(fetchPostStarted())
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
}
