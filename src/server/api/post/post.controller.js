/**
 * Created by sourabh on 8/5/17.
 */

const postService = require("./post.service");
const valiDateSchema = require("./joi.schema");
const Joi = require("joi");
exports.createPost = (req, res) => {
    const postData = req.body;
    console.log("data-----------",postData);
    const postBody = postData.postBody.trim();
    const status = postData.post_value;
    const userId = req.user._id;
    let Postimage = postData.file;
      if(!Postimage){
          Postimage=null;
      }
    // if(req.file && req.file.filename) {
    //     Postimage = req.file.filename;
    // }
    Joi.validate({
        postBody: postBody,
        status: status,
        userId: userId,
        Postimage: Postimage
    }, valiDateSchema.schema, (err, data) => {
        if (err) {
            console.log("eroor-------",err)
            res.status(403);
        } else {
            postService.post(data.postBody, data.status, data.userId, data.Postimage)
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