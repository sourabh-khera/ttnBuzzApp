/**
 * Created by sourabh on 8/5/17.
 */


const postModel = require("./post.model");

exports.post = (postBody,status, userId, Postimage, res) => {
    return new Promise(function(resolve, reject) {
        postModel.create({
            postBody:postBody,
            status:status,
            postedBy: userId,
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
            .exec((err, posts) =>  {
                if (err) reject({
                    message: "Unable to fetch all posts from the database",
                    error: err
                });
                resolve(posts)
            });
    })
};