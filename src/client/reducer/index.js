import { combineReducers } from 'redux'
import { postReducer } from "./posts.reducer"
import { userReducer } from "./user.reducer"
import { LikesAndDislikesReducer } from "./likes.reducer"
import { commentsReducer } from "./comments.reducer"
import {complaintReducer} from "./complaint.reducer"

export default combineReducers({
    userReducer: userReducer,
    postReducer: postReducer,
    LikesAndDislikesReducer: LikesAndDislikesReducer,
    commentsReducer: commentsReducer,
    complaintReducer: complaintReducer,
});
