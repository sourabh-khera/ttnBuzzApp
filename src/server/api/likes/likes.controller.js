/**
 * Created by sourabh on 15/5/17.
 */
const Joi = require("joi");
const likesService = require("./likes.service");
const validateLikeSchema = require("./likes.joi.schema");
exports.createLike = (req, res) => {
    const postid = req.body.data;
    console.log("post------", postid)
    const Likestatus = req.body.status;
    const userid = req.user._id;


    Joi.validate({
        postid: postid,
        Likestatus: Likestatus,
        userid: userid
    }, validateLikeSchema.schema, (err, data) => {
        if (err) {
            res.status(403);
        } else {
            console.log("data-----------", data);
            likesService.likes(data.postid, data.userid, data.Likestatus)
                .then(
                    likesService.getUserData
                ).then((data) => {
                res.send({
                    data
                })
            }).catch(function(error) {
                res.send(error)
            })
        }
    });

};


exports.fetchlikesData = (req, res) => {
    likesService.getUserData()
        .then((data) => {
            res.send({
                data
            })
        }).catch((error) => {
        res.send(error)
    })

};