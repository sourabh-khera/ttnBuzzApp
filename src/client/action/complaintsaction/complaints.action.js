/**
 * Created by sourabh on 21/5/17.
 */

import {
    CREATE_COMPLAINT_STARTED,
    CREATE_COMPLAINT_SUCCESS,
    CREATE_COMPLAINT_FAILURE,
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