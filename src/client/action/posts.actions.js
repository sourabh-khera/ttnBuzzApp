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
    CREATE_LIKE_STARTED,
    CREATE_LIKE_SUCCESS,
    CREATE_LIKE_FAILURE,
    CREATE_DISLIKE_STARTED,
    CREATE_DISLIKE_SUCCESS,
    CREATE_DISLIKE_FAILURE
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


export const createLikeStarted = () => {
    return {type: CREATE_LIKE_STARTED}
};

export const createLikeSuccess = (countLikes) => {
    return {type: CREATE_LIKE_SUCCESS, countLikes}
};

export const createLikeFailure = (err) => {
    return {type: CREATE_LIKE_FAILURE, err}
};


export const createDislikeStarted = () => {
    return {type: CREATE_DISLIKE_STARTED}
};

export const createDislikeSuccess = (numOfDislikes) => {
    return {type: CREATE_DISLIKE_SUCCESS, numOfDislikes}
};

export const createDislikeFailure = (err) => {
    return {type: CREATE_DISLIKE_FAILURE, err}
};
