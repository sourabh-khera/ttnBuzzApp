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
    return (dispatch) => {
        dispatch(createPostStarted());
        fetch("http://localhost:3000/post", {
            credentials: "include",
            method: "post",
            body: postData,
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

    const baseUrl = "http://localhost:3000/";
    const path = "post";
    const skipRecords = "skip=" + skip;
    const fetchLimit = "limit=" + limit;
    const and = "&";
    const queryString = "?" + skipRecords + and + fetchLimit;
    const url = baseUrl + path + queryString;
    return (dispatch) => {
        dispatch(fetchPostStarted());
        fetch(url, {
            credentials: "include",
            method: "get",
        })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchPostSuccess(data.posts))
            }).catch((err) => {
            dispatch(fetchPostFailure(err))
        })
    }
};

