/**
 * Created by sourabh on 8/5/17.
 */

import {
    CREATE_POST_STARTED,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    FETCH_POST_STARTED,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    CREATE_LIKE_STARTED,
    CREATE_LIKE_SUCCESS,
    CREATE_LIKE_FAILURE,
    CREATE_DISLIKE_STARTED,
    CREATE_DISLIKE_SUCCESS,
    CREATE_DISLIKE_FAILURE
}from "../constants/constants"
const postState = {
    postData: [],
     likes:0,
     disLikes:0,
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


        case CREATE_LIKE_STARTED: {
            return {
                ...state
            }
        }
        case CREATE_LIKE_SUCCESS: {

            return {
                ...state,
                likes:action.countLikes.likecount,
                disLikes:action.countLikes.dislikecount
            }
        }
        case CREATE_LIKE_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }
        case CREATE_DISLIKE_STARTED: {
            return {
                ...state
            }
        }
        case CREATE_DISLIKE_SUCCESS: {

            return {
                ...state,
                disLikes:action.numOfDislikes.dislikecount,
                likes:action.numOfDislikes.likecount
            }
        }
        case CREATE_DISLIKE_FAILURE: {
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

