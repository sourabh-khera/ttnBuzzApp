/**
 * Created by sourabh on 9/5/17.
 */
import {
    createPostStarted,
    createPostSuccess,
    createPostFailure
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
            body: JSON.stringify({data: postData})
        })
            .then(response => response.json())
            .then(postData => {
                dispatch(createPostSuccess(postData))
            }).catch((err) => {
            dispatch(createPostFailure(err))
        })
    }
}


export const fetchUserDetails = (postData) => {

    return (dispatch) => {
        dispatch(createPostStarted())
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
