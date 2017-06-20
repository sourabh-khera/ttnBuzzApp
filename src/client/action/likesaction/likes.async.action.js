/**
 * Created by sourabh on 19/5/17.
 */

import {
    createLikeAndDislikeStarted,
    createLikeAndDislikeSuccess,
    createLikeAndDislikeFailure,
    fetchLikesAndDislikeStarted,
    fetchLikesAndDislikeSuccess,
    fetchLikesAndDislikeFailure

} from "./likes.action"
import fetch from "isomorphic-fetch";

export const createLikesAndDislikes = (postid, status,jwt_token) => {
    return (dispatch) => {
        dispatch(createLikeAndDislikeStarted());
        fetch("/like", {
            credentials: "include",
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization':jwt_token,
            },
            body: JSON.stringify({data: postid, status: status})
        })
            .then(response => response.json())
            .then(numofLikes => {
                dispatch(createLikeAndDislikeSuccess(numofLikes.data))
            }).catch((err) => {
            dispatch(createLikeAndDislikeFailure(err))
        })
    }
};


export const fetchLikesAndDiislikesDetails = (jwt_token) => {

    return (dispatch) => {
        dispatch(fetchLikesAndDislikeStarted());
        fetch("/like", {
            credentials: "include",
            method: "get",
            headers:{
                'authorization':jwt_token,
            }
        })
            .then(response => response.json())
            .then(postLikes => {
                dispatch(fetchLikesAndDislikeSuccess(postLikes.data))
            }).catch((err) => {
            dispatch(fetchLikesAndDislikeFailure(err))
        })
    }
};



