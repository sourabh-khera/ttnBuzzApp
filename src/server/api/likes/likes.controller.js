/**
 * Created by sourabh on 15/5/17.
 */

const likesService = require("./likes.service");
let likecount=0;
let dislikecount=0;
exports.createLike = (req, res) => {
    const postid = req.body.data;
    const Likestatus = req.body.status;
    const userid = req.user._id;
    likesService.likes(postid, userid, Likestatus)
        .then((data) => {
           if(Likestatus=='liked') {
               countLikes(req, res, postid, Likestatus)
           }else{
               countDisLikes(req,res,postid,Likestatus)
           }
        }).catch(function (error) {
        res.send(error)
    })
};


 countLikes = (req, res,postid,status) => {
     likesService.numofLikes(postid,status)
        .then((count) => {
           likecount=count;
           if(dislikecount>0){
               dislikecount-=1;
           }
            res.send({likecount,dislikecount})
        }).catch(function (error) {
        res.send(error)
    })
 };


countDisLikes = (req, res,postid,status) => {
    likesService.numofDisLikes(postid,status)
        .then((count) => {
            dislikecount=count;
            if(likecount>0){
                likecount-=1;
            }
            res.send({likecount,dislikecount})
        }).catch(function (error) {
        res.send(error)
    })

};