/**
 * Created by sourabh on 21/5/17.
 */

import {
    createComplaintStarted,
    createComplaintSuccess,
    createComplaintFailure,
    fetchComplaintStarted,
    fetchComplaintSuccess,
    fetchComplaintFailure

} from "./complaints.action";
import fetch from "isomorphic-fetch";

export const createComplaint = (ComplaintData) => {
    console.log("-------------",ComplaintData);

    return (dispatch) => {
        dispatch(createComplaintStarted());
        fetch("/complaint", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(ComplaintData),
            credentials:"include"
        })
            .then(response => response.json())
            .then(complaint => {
                dispatch(createComplaintSuccess(complaint.data))
            })
            .catch(error => {
                dispatch(createComplaintFailure(error))
            })
    }

};


export const fetchComplaint = () => {
    return (dispatch) => {
        dispatch(fetchComplaintStarted());
        fetch("/complaint", {
            method: 'get',
            credentials:"include",
        })
            .then(response => response.json())
            .then(complaint => {
                dispatch(fetchComplaintSuccess(complaint.data))
            })
            .catch(error => {
                dispatch(fetchComplaintFailure(error))
            })
    }

};