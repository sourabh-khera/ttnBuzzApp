/**
 * Created by sourabh on 15/5/17.
 */

const likesService = require("./likes.service");
exports.createLike = (req, res) => {
    const postid = req.body.data;
    const Likestatus = req.body.status;
    const userid = req.user._id;
    //const userid = req.user._id;
    likesService.likes(postid, userid, Likestatus)
        .then(
            likesService.getUserData
        ).then((data) => {
        console.log(data)
        res.send({
            data
        })
    }).catch(function(error) {
        res.send(error)
    })
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