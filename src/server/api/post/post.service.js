/**
 * Created by sourabh on 8/5/17.
 */


const postModel = require("./post.model")

exports.post = (postData, user, res) => {
    return new Promise(function(resolve, reject) {
        postModel.create({ postBody:postData.postBody, status:postData.value, postedBy: user._id }, (err,post) => {
            if (err) {
                reject({ message: "error while creating user", error: err })
            }
            resolve(post)
        })
    })
};

exports.populateUserData = () => {
    return new Promise(function(resolve, reject) {
        postModel
            .find({})
            .sort({createdAt: -1})
            .populate("postedBy")
            .exec(function (err, posts) {
                if (err) reject({messge: "Unable to fetch all posts from the database", error: err})
                resolve(posts)
            });
    })
}

