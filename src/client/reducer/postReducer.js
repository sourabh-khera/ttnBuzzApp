/**
 * Created by sourabh on 8/5/17.
 */

import {
    CREATE_POST_STARTED,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_POST_STARTED,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE


}from "../constants/constants"
const postState = {

    postData: [],
    error: null,

};


export const postReducer = (state = postState, action) => {

    switch (action.type) {

        case CREATE_POST_STARTED: {
            return {
                ...state
            }
        }
        case CREATE_POST_SUCCESS: {

            return {
                ...state,
                postData: action.postData

            }
        }
        case CREATE_POST_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }
        case FETCH_POST_STARTED: {
            return {
                ...state
            }
        }
        case FETCH_POST_SUCCESS: {

            return {
                ...state,
                postData: action.postData

            }
        }
        case FETCH_POST_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }

        default: {
            return state
        }

    }


}

