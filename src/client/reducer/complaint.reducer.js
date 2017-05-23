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
} from "../constants/constants"

const complaintState={
  complaintData:[],
  error:null,
};


export const complaintReducer=(state=complaintState,action)=>{

    switch(action.type){

        case CREATE_COMPLAINT_STARTED:{
            return{
                ...state,
            }
        }
        case CREATE_COMPLAINT_SUCCESS:{
            return{
                ...state,
                complaintData:state.complaintData.concat(action.ComplaintData),
            }
        }
        case CREATE_COMPLAINT_FAILURE:{
            return{
                ...state,
                error:action.err
            }
        }
        case FETCH_COMPLAINTS_STARTED:{
            return{
                ...state,
            }
        }
        case FETCH_COMPLAINTS_SUCCESS:{
            return{
                ...state,
                complaintData:state.complaintData.concat(action.ComplaintData),
            }
        }
        case FETCH_COMPLAINTS_FAILURE:{
            return{
                ...state,
                error:action.err
            }
        }

        default:return state;
    }

};
