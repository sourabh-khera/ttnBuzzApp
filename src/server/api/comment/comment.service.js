/**
 * Created by sourabh on 8/5/17.
 */

const commentModel = require("./comment.model");


exports.comment = (postid, userid, comment) => {
    return new Promise((resolve, reject) => {
        commentModel.create({
            postId: postid,
            userId: userid,
            commentBody: comment
        }, (error, data) => {
            if (error) {
                reject({
                    message: "comment can not be created",
                    error: error
                })
            } else
                resolve(data)

        })
    })
};

exports.removeComment = (commentId) => {
    return new Promise((resolve, reject) => {
        commentModel.delete({_id: commentId}, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve({data})
        })
    })
};


exports.getUserData = () => {
    return new Promise((resolve, reject) => {
        commentModel
            .find({})
            .populate("userId")
            .exec((error, data) => {
                if (error) {
                    reject({
                        message: "unable to get user comments",
                        error: error
                    })
                }
                resolve(data)
            })
    })
};