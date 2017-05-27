/**
 * Created by sourabh on 15/5/17.
 */

import {
    fetchUserStarted,
    fetchUserSuccess,
    fetchUserFailure,
    setLogginUser,
} from "./user.actions"
import fetch from "isomorphic-fetch";
export const fetchUserDetails = () => {

    return (dispatch) => {
        dispatch(fetchUserStarted());
        fetch("http://localhost:3000/user", {
            credentials: "include",
            method: "get",
            headers: {
                'Cache-Control': 'no-cache'
            },
        })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchUserSuccess(data.userData))
            }).catch((err) => {
            dispatch(fetchUserFailure(err))
        })
    }
};


export const getLoggedInUser = () => (dispatch) => {
    fetch("http://localhost:3000/authuser", {
        method: 'get',
        credentials: "include",
    })
        .then(response => response.json())
        .then(userEmail => {
            localStorage.setItem('Email', userEmail.email);
            dispatch(setLogginUser(userEmail))
        })
        .catch((error) => console.log(error))
};


export const logout = () => (dispatch) => {
    fetch("http://localhost:3000/logout", {
        method: 'get',
        credentials: "include",
    })
};
