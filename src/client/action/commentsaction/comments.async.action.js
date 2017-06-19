/**
 * Created by sourabh on 19/5/17.
 */
import {
    createCommentStarted,
    createCommentSuccess,
    createCommentFailure,
    fetchCommentsStarted,
    fetchCommentsSuccess,
    fetchCommentsFailure
} from "./comments.action"
import fetch from "isomorphic-fetch";


export const createComment = (comment, postid) => {
    return (dispatch) => {
        dispatch(createCommentStarted());
        fetch("/comment", {
            credentials: "include",
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: comment, id: postid})
        })
        .then(response => response.json())
        .then(comments => {
            dispatch(createCommentSuccess(comments.data))
        }).catch((err) => {
            dispatch(createCommentFailure(err))
        })
    }
};


export const fetchCommentsDetails = (jwt_token) => {
    return (dispatch) => {
        dispatch(fetchCommentsStarted());
        fetch("/comment", {
            credentials: "include",
            method: "get",
            headers:{
                'authorization':jwt_token,
            }
        })
        .then(response => response.json())
        .then(comments => {
            dispatch(fetchCommentsSuccess(comments.data))
        }).catch((err) => {
            dispatch(fetchCommentsFailure(err))
        })
    }
};

