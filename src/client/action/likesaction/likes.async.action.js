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

export const createLikesAndDislikes = (postid, status) => {
    return (dispatch) => {
        dispatch(createLikeAndDislikeStarted());
        fetch("/like", {
            credentials: "include",
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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


export const fetchLikesAndDiislikesDetails = () => {

    return (dispatch) => {
        dispatch(fetchLikesAndDislikeStarted());
        fetch("/like", {
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



