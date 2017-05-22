/**
 * Created by sourabh on 21/5/17.
 */

import {
    createComplaintStarted,
    createComplaintSuccess,
    createComplaintFailure,
} from "./complaints.action";
import fetch from "isomorphic-fetch";

export const createComplaint = (ComplaintData) => {

    return (dispatch) => {
        dispatch(createComplaintStarted());
        fetch("http://localhost:3000/complaint", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(ComplaintData),
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