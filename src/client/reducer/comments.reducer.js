/**
 * Created by sourabh on 19/5/17.
 */

import {
    CREATE_COMMENT_STARTED,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,
    FETCH_COMMENTS_STARTED,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE
} from "../constants/constants"

const commentsState = {
    commentsData: [],
    error: null
};


export const commentsReducer = (state = commentsState, action) => {

    switch (action.type) {
        case CREATE_COMMENT_STARTED: {
            return {...state}
        }
        case CREATE_COMMENT_SUCCESS: {
            return {
                ...state,
                commentsData: action.comments
            }
        }
        case CREATE_COMMENT_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }
        case FETCH_COMMENTS_STARTED: {
            return {
                ...state
            }
        }
        case FETCH_COMMENTS_SUCCESS: {
            return {
                ...state,
                commentsData: action.comments
            }
        }
        case FETCH_COMMENTS_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }
        case DELETE_COMMENT_SUCCESS:{
            return{
                ...state,
                commentsData:action.comments
            }
        }
        case DELETE_COMMENT_FAILURE:{
            return{
                ...state,
                error:action.err
            }
        }
        default: {
            return state
        }

    }


};

