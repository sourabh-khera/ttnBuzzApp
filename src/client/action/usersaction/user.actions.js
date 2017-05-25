/**
 * Created by sourabh on 15/5/17.
 */

import {
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    SET_LOGGED_IN_USER,
} from "../../constants/constants"



export const fetchUserStarted = () => {
    return {type: FETCH_USER_STARTED}
};

export const fetchUserSuccess = (userData) => {
    return {type: FETCH_USER_SUCCESS,userData}
};

export const fetchUserFailure = (err) => {
    return {type: FETCH_USER_FAILURE,err}
};

export const setLogginUser = (user) => {
    return {type: SET_LOGGED_IN_USER, user}
}
