/**
 * Created by sourabh on 19/5/17.
 */

import {
    CREATE_LIKE_DISLIKE_STARTED,
    CREATE_LIKE_DISLIKE_SUCCESS,
    CREATE_LIKE_DISLIKE_FAILURE,
    FETCH_LKES_DISLIKES_STARTED,
    FETCH_LIKES_DISLIKES_SUCCESS,
    FETCH_LIKES_DISLIKES_FAILURE
} from "../constants/constants"


const likesState = {
    LikeAndDislikeData: [],
    error: null,
};


export const LikesAndDislikesReducer = (state = likesState, action) => {

    switch (action.type) {


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
                LikeAndDislikeData: action.likesData,
            }
        }
        case FETCH_LIKES_DISLIKES_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }
        default: {
            return state
        }
    }
};
