const commentService = require("./comment.service");
const Joi = require("joi");
const validateSchema = require("./comment.joi.schema")
exports.createComment = (req, res) => {
    const userid = req.user._id;
    const postid = req.body.id;
    const comment = req.body.data;
    console.log(userid, postid, comment);

    Joi.validate({
        userid: userid,
        postid: postid,
        comment: comment
    }, validateSchema.schema, (err, data) => {
        if (err) {
            res.status(403);
        } else {
            commentService.comment(postid, userid, comment)
                .then(
                    commentService.getUserData
                ).then((data) => {
                res.send({
                    data
                })
            }).catch((error) => {
                res.send(error)
            })
        }
    });

};

exports.fetchCommentsData = (req, res) => {

    commentService.getUserData()
        .then((data) => {
            res.send({
                data
            })
        }).catch((error) => {
        res.send(error)
    })
};