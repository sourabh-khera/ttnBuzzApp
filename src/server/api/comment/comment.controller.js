/**
 * Created by sourabh on 8/5/17.
 */

const commentService = require("./comment.service");
exports.createComment = (req, res) => {
    const userid = req.user._id;
    const postid = req.body.id;
    const comment = req.body.data;
    console.log(userid, postid, comment);

    commentService.comment(postid, userid, comment)
        .then(
            commentService.getUserData
        ).then((data) => {
        res.send({data})
    }).catch((error) => {
        res.send(error)
    })
};

exports.fetchCommentsData = (req,res) => {

    commentService.getUserData()
        .then((data) => {
            res.send({data})
        }).catch((error) => {
        res.send(error)
    })
};

