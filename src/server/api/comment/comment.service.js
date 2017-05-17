/**
 * Created by sourabh on 8/5/17.
 */

const commentModel = require("./comment.model")


exports.comment = (postid,userid,comment) => {
    return new Promise((resolve, reject) => {
        commentModel.create({postId:postid,userId:userid,commentBody:comment}, (error, data) => {
            if (error) {
                reject({message: "comment can not be created", error: error})
            } else {
                resolve(data)
            }
        })
    })


}