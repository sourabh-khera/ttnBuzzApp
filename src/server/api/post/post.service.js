/**
 * Created by sourabh on 8/5/17.
 */


const postModel = require("./post.model");

exports.post = (postData, user, Postimage, res) => {
    return new Promise(function(resolve, reject) {
        postModel.create({
            postBody: postData.postBody,
            status: postData.post_value,
            postedBy: user._id,
            image: Postimage
        }, (err, post) => {
            if (err) {
                reject({
                    message: "error while creating user",
                    error: err
                })
            }
            resolve(post)
        })
    })
};

exports.populateUserData = (skipRecords, fetchLimit) => {
    return new Promise(function(resolve, reject) {
        const skip = parseInt(skipRecords);
        const limit = parseInt(fetchLimit);
        postModel
            .find({})
            .limit(limit)
            .skip(skip)
            .sort({
                createdAt: -1
            })
            .populate("postedBy")
            .exec(function(err, posts) {
                if (err) reject({
                    message: "Unable to fetch all posts from the database",
                    error: err
                });
                resolve(posts)
            });
    })
};