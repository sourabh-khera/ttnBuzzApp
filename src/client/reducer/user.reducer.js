/**
 * Created by sourabh on 15/5/17.
 */


import {
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    SET_LOGGED_IN_USER,

} from "../constants/constants"

const userState={
    userData:[],
    error:null,
    user: ''
}



export const userReducer = (state = userState, action) => {

    switch (action.type) {
        case FETCH_USER_STARTED: {
            return {
                ...state
            }
        }
        case FETCH_USER_SUCCESS: {
            const userData=action.userData;
            return {
                ...state,
                userData

            }
        }
        case FETCH_USER_FAILURE: {
            return {
                ...state,
                error: action.err
            }
        }
        case SET_LOGGED_IN_USER: {
            return {
                ...state,
                user: action.user.email,
            }
        }
        default: {
            return state
        }
    }
}