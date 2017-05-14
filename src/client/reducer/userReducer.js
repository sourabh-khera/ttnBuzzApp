/**
 * Created by sourabh on 15/5/17.
 */


import {
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE

} from "../constants/constants"

const userState={

    userData:[],
    error:null,
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

        default: {
            return state
        }
    }
}