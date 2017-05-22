/**
 * Created by sourabh on 15/5/17.
 */

import {
    fetchUserStarted,
    fetchUserSuccess,
    fetchUserFailure
} from "./user.actions"
import fetch from "isomorphic-fetch";
export const fetchUserDetails = () => {

    return (dispatch) => {
        dispatch(fetchUserStarted());
        fetch("http://localhost:3000/user", {
            credentials: "include",
            method: "get",
        })
            .then(response => response.json())
            .then(userData => {
                dispatch(fetchUserSuccess(userData))
            }).catch((err) => {
            dispatch(fetchUserFailure(err))
        })
    }
};

