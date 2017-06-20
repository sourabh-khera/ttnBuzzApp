/**
 * Created by sourabh on 9/5/17.
 */
import {
    createPostStarted,
    createPostSuccess,
    createPostFailure,
    fetchPostStarted,
    fetchPostSuccess,
    fetchPostFailure,
} from "./posts.actions"
import fetch from "isomorphic-fetch";

export const createPost = (postData,jwt_token) => {
    return (dispatch) => {
        dispatch(createPostStarted());
        fetch("/post", {
            credentials: "include",
            method: "post",
            body: postData,
            headers:{
                'authorization':jwt_token
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch(createPostSuccess(data.posts))
            }).catch((err) => {
            dispatch(createPostFailure(err))
        })
    }
};
export const fetchPostDetails = (skip, limit,jwt_token) => {


    const path = "/post";
    const skipRecords = "skip=" + skip;
    const fetchLimit = "limit=" + limit;
    const and = "&";
    const queryString = "?" + skipRecords + and + fetchLimit;
    const url =   path + queryString;
    return (dispatch) => {
        dispatch(fetchPostStarted());
        fetch(url, {
            credentials: "include",
            method: "get",
            headers:{
                'authorization':jwt_token
            }
        })
            .then(response => response.json())
            .then(data => {
                if(skip == 0) {
                    dispatch({
                        type: 'INITIAL_FETCH_SUCCESS',
                        postData: data.posts,
                    });
                    return;
                }
                dispatch(fetchPostSuccess(data.posts))
            }).catch((err) => {
            dispatch(fetchPostFailure(err))
        })
    }
};

