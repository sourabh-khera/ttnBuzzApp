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
export const fetchUserDetails = (jwt_token) => {
console.log("user token----------",jwt_token);
    return (dispatch) => {
        dispatch(fetchUserStarted());
        fetch("/user", {
            method: "get",
            headers: {
                'Cache-Control': 'no-cache',
                'authorization':jwt_token,
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
