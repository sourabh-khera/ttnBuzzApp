/**
 * Created by sourabh on 8/5/17.
 */

const postService = require("./post.service");
const valiDateSchema = require("./joi.schema");
const Joi = require("joi");
exports.createPost = (req, res) => {
    const postData = req.body;
    const postBody = postData.postBody;
    const status = postData.post_value;
    const userId = req.user_id;
    let Postimage = null;
    if(req.file && req.file.filename) {
        const imageExtension = req.file.filename.split('.')[1];
        if ((imageExtension == 'png') || (imageExtension == 'jpg' || (imageExtension == 'gif'))) {
            Postimage = req.file.filename;
        } else {
            res.send("plz select a valid image")
        }
    }
    Joi.validate({
        postBody: postBody,
        status: status,
        userId: userId,
        Postimage: Postimage
    }, valiDateSchema.schema, (err, data) => {
        if (err) {
            console.log("eroor-------",err);
            res.status(403);
        } else {
            postService.post(data.postBody, data.status, data.userId, data.Postimage, res)
                .then(
                    postService.populateUserData
                )
                .then((posts) => {
                    res.send({
                        posts
                    })
                }).catch(function (error) {
                res.send(error)
            })
        }
    });


};
exports.fetchPostData = (req, res) => {
    console.log('fetch posts');
    const skipRecords = req.query.skip;
    const fetchLimit = req.query.limit;
    postService.populateUserData(skipRecords, fetchLimit)
        .then((posts) => {
            res.send({
                posts
            })
        }).catch((error) => {
        res.send(error)
    })
};