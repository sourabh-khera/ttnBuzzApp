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
        fetch("/user", {
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

export const logout = () => (dispatch) => {
    fetch("/logout", {
        method: 'get',
        credentials: "include",
    })
};
