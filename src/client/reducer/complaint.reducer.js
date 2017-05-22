/**
 * Created by sourabh on 21/5/17.
 */
import {
    CREATE_COMPLAINT_STARTED,
    CREATE_COMPLAINT_SUCCESS,
    CREATE_COMPLAINT_FAILURE
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
                complaintData:action.ComplaintData,
            }
        }
        case CREATE_COMPLAINT_FAILURE:{
            return{
                ...state,
                error:action.err
            }
        }
        default:return state;
    }

};
