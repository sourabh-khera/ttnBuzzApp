/**
 * Created by sourabh on 9/5/17.
 */
import {
    CREATE_POST_STARTED,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE


} from "../constants/constants"


export const createPostStarted = () => {
    return {type: CREATE_POST_STARTED}
}

export const createPostSuccess = (postData) => {
    return {type: CREATE_POST_SUCCESS,postData}
}

export const createPostFailure = (err) => {
    return {type: CREATE_POST_FAILURE,err}
}

export const fetchUserStarted = () => {
    return {type: Fetch_USER_STARTED}
}

export const fetchUserSuccess = (userData) => {
    return {type: Fetch_USER_SUCCESS,userData}
}

export const fetchUserFailure = (err) => {
    return {type: Fetch_USER_FAILURE,err}
}
