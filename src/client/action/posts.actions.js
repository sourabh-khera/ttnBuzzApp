/**
 * Created by sourabh on 9/5/17.
 */
import {
    CREATE_POST_STARTED,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    FETCH_POST_STARTED,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE


} from "../constants/constants"


export const createPostStarted = () => {
    return {type: CREATE_POST_STARTED}
}

export const createPostSuccess = (postData) => {
    return {type: CREATE_POST_SUCCESS, postData}
}

export const createPostFailure = (err) => {
    return {type: CREATE_POST_FAILURE, err}
}

export const fetchPostStarted = () => {
    return {type: FETCH_POST_STARTED}
}

export const fetchPostSuccess = (postData) => {
    return {type: FETCH_POST_SUCCESS, postData}
}

export const fetchPostFailure = (err) => {
    return {type: FETCH_POST_FAILURE, err}
}

