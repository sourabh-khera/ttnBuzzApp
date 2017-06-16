/**
 * Created by sourabh on 19/5/17.
 */
import {
    createCommentStarted,
    createCommentSuccess,
    createCommentFailure,
    fetchCommentsStarted,
    fetchCommentsSuccess,
    fetchCommentsFailure,
    deleteCommentSuccess,
    deleteCommentFailure,
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


export const fetchCommentsDetails = () => {
    return (dispatch) => {
        dispatch(fetchCommentsStarted());
        fetch("/comment", {
            credentials: "include",
            method: "get",
        })
            .then(response => response.json())
            .then(comments => {
                dispatch(fetchCommentsSuccess(comments.data))
            }).catch((err) => {
            dispatch(fetchCommentsFailure(err))
        })
    }
};

export const deleteComment = (commentId) => {
    console.log("comment-------",commentId)
    return (dispatch) => {
        fetch("/comment", {
            method: 'delete',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({data:commentId})
        })
            .then(response => response.json())
            .then(data => {
                dispatch(deleteCommentSuccess(data.comments))
            })
            .catch(err => {
                    dispatch(deleteCommentFailure(err))
                }
            )
    }


};

