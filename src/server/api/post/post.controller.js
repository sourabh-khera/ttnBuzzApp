/**
 * Created by sourabh on 8/5/17.
 */

const postService = require("./post.service");
exports.createPost = (req,res) => {
    const postData = req.body;
    let Postimage=null;
    if(req.file && req.file.filename) {
        Postimage=req.file.filename;
    }

    postService.post(postData,req.user,Postimage, res)
        .then(
             postService.populateUserData
        )
        .then( (posts) => {
            res.send({posts})
        }).catch(function (error) {
            res.send(error)
        })

};

exports.fetchPostData = (req,res) => {
    const skipRecords=req.query.skip;
    const fetchLimit=req.query.limit;
    postService.populateUserData(skipRecords,fetchLimit)
        .then((posts) => {
            res.send({posts})
        }).catch((error) => {
            res.send(error)
        })
};
