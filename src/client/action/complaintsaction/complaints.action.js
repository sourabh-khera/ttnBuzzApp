/**
 * Created by sourabh on 21/5/17.
 */

import {
    CREATE_COMPLAINT_STARTED,
    CREATE_COMPLAINT_SUCCESS,
    CREATE_COMPLAINT_FAILURE,
    FETCH_COMPLAINTS_STARTED,
    FETCH_COMPLAINTS_SUCCESS,
    FETCH_COMPLAINTS_FAILURE
} from "../../constants/constants"

export const createComplaintStarted = () => {
    return {type: CREATE_COMPLAINT_STARTED}
};

export const createComplaintSuccess = (ComplaintData) => {
    return {type: CREATE_COMPLAINT_SUCCESS, ComplaintData}
};

export const createComplaintFailure = (err) => {
    return {type: CREATE_COMPLAINT_FAILURE, err}
};


export const fetchComplaintStarted = () => {
    return {type: FETCH_COMPLAINTS_STARTED}
};

export const fetchComplaintSuccess = (ComplaintData) => {
    return {type: FETCH_COMPLAINTS_SUCCESS, ComplaintData}
};

export const fetchComplaintFailure = (err) => {
    return {type: FETCH_COMPLAINTS_FAILURE, err}
};