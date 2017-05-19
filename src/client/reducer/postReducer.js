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
    CREATE_LIKE_DISLIKE_STARTED,
    CREATE_LIKE_DISLIKE_SUCCESS,
    CREATE_LIKE_DISLIKE_FAILURE,
    CREATE_COMMENT_STARTED,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,
    FETCH_LKES_DISLIKES_STARTED,
    FETCH_LIKES_DISLIKES_SUCCESS,
    FETCH_LIKES_DISLIKES_FAILURE,
    FETCH_COMMENTS_STARTED,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE
}from "../constants/constants"
const postState = {
    postData: [],
    LikeAndDislikeData:[],
    commentsData:[],
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
                postData:state.postData.concat(action.postData)

            }
        }
        case FETCH_POST_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }


        case CREATE_LIKE_DISLIKE_STARTED: {
            return {
                ...state
            }
        }
        case CREATE_LIKE_DISLIKE_SUCCESS: {

            return {
                ...state,
                LikeAndDislikeData: action.numofLikes,

            }
        }
        case CREATE_LIKE_DISLIKE_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }

        case FETCH_LKES_DISLIKES_STARTED: {
            return {
                ...state
            }
        }
        case FETCH_LIKES_DISLIKES_SUCCESS: {

            return {
                ...state,
                LikeAndDislikeData:action.likesData,
            }
        }
        case FETCH_LIKES_DISLIKES_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }

        case CREATE_COMMENT_STARTED: {
            return {
                ...state
            }
        }

        case CREATE_COMMENT_SUCCESS: {

            return {
                ...state,
                commentsData:action.comments
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


        default: {
            return state
        }

    }


}

