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

export const createPost = (postData) => {
    console.log("postdata..........",postData)
    return (dispatch) => {
        dispatch(createPostStarted());
        fetch("/post", {
            credentials: "include",
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(createPostSuccess(data.posts))
            }).catch((err) => {
            dispatch(createPostFailure(err))
        })
    }
};
export const fetchPostDetails = (skip, limit) => {


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

