/**
 * Created by sourabh on 9/5/17.
 */
import {
    CREATE_POST_STARTED,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    FETCH_POST_STARTED,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    CREATE_LIKE_DISLIKE_STARTED,
    CREATE_LIKE_DISLIKE_SUCCESS,
    CREATE_LIKE_DISLIKE_FAILURE,
    CREATE_COMMENT_STARTED,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,
    FETCH_LKES_DISLIKES_STARTED,
    FETCH_LIKES_DISLIKES_SUCCESS,
    FETCH_LIKES_DISLIKES_FAILURE
} from "../constants/constants"


export const createPostStarted = () => {
    return {type: CREATE_POST_STARTED}
};

export const createPostSuccess = (postData) => {
    return {type: CREATE_POST_SUCCESS, postData}
};

export const createPostFailure = (err) => {
    return {type: CREATE_POST_FAILURE, err}
};


export const fetchPostStarted = () => {
    return {type: FETCH_POST_STARTED}
};

export const fetchPostSuccess = (postData) => {
    return {type: FETCH_POST_SUCCESS, postData}
};

export const fetchPostFailure = (err) => {
    return {type: FETCH_POST_FAILURE, err}
};


export const createLikeAndDislikeStarted = () => {
    return {type: CREATE_LIKE_DISLIKE_STARTED}
};

export const createLikeAndDislikeSuccess = (numofLikes) => {
    return {type: CREATE_LIKE_DISLIKE_SUCCESS, numofLikes}
};

export const createLikeAndDislikeFailure = (err) => {
    return {type: CREATE_LIKE_DISLIKE_FAILURE, err}
};



export const createCommentStarted = () => {
    return {type: CREATE_COMMENT_STARTED}
};

export const createCommentSuccess = (numOfDislikes) => {
    return {type: CREATE_COMMENT_SUCCESS, numOfDislikes}
};

export const createCommentFailure = (err) => {
    return {type: CREATE_COMMENT_FAILURE, err}
};



export const fetchLikesAndDislikeStarted = () => {
    return {type: FETCH_LKES_DISLIKES_STARTED}
};

export const fetchLikesAndDislikeSuccess = (postData) => {
    return {type: FETCH_LIKES_DISLIKES_SUCCESS, postData}
};

export const fetchLikesAndDislikeFailure = (err) => {
    return {type: FETCH_LIKES_DISLIKES_FAILURE, err}
};