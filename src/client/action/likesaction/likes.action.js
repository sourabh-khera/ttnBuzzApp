/**
 * Created by sourabh on 19/5/17.
 */
import {
    CREATE_LIKE_DISLIKE_STARTED,
    CREATE_LIKE_DISLIKE_SUCCESS,
    CREATE_LIKE_DISLIKE_FAILURE,
    FETCH_LKES_DISLIKES_STARTED,
    FETCH_LIKES_DISLIKES_SUCCESS,
    FETCH_LIKES_DISLIKES_FAILURE,
}
    from "../../constants/constants"

export const createLikeAndDislikeStarted = () => {
    return {type: CREATE_LIKE_DISLIKE_STARTED}
};

export const createLikeAndDislikeSuccess = (numofLikes) => {
    return {type: CREATE_LIKE_DISLIKE_SUCCESS, numofLikes}
};

export const createLikeAndDislikeFailure = (err) => {
    return {type: CREATE_LIKE_DISLIKE_FAILURE, err}
};


export const fetchLikesAndDislikeStarted = () => {
    return {type: FETCH_LKES_DISLIKES_STARTED}
};

export const fetchLikesAndDislikeSuccess = (likesData) => {
    return {type: FETCH_LIKES_DISLIKES_SUCCESS, likesData}
};

export const fetchLikesAndDislikeFailure = (err) => {
    return {type: FETCH_LIKES_DISLIKES_FAILURE, err}
};

