/**
 * Created by sourabh on 19/5/17.
 */
import {
    CREATE_COMMENT_STARTED,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,

    FETCH_COMMENTS_STARTED,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,

    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE,
} from "../../constants/constants"


export const createCommentStarted = () => {
    return {type: CREATE_COMMENT_STARTED}
};

export const createCommentSuccess = (comments) => {
    return {type: CREATE_COMMENT_SUCCESS, comments}
};

export const createCommentFailure = (err) => {
    return {type: CREATE_COMMENT_FAILURE, err}
};


export const fetchCommentsStarted = () => {
    return {type: FETCH_COMMENTS_STARTED}
};

export const fetchCommentsSuccess = (comments) => {
    return {type: FETCH_COMMENTS_SUCCESS, comments}
};

export const fetchCommentsFailure = (err) => {
    return {type: FETCH_COMMENTS_FAILURE, err}
};

export const deleteCommentSuccess = (comments) => {
    return {type: DELETE_COMMENT_SUCCESS, comments}
};

export const deleteCommentFailure = (err) => {
    return {type: DELETE_COMMENT_FAILURE, err}
};

