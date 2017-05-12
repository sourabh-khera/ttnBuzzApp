/**
 * Created by sourabh on 8/5/17.
 */

const postService = require("./post.service")
exports.createPost = (req,res) => {
    const postData = req.body;
    let Postimage=null
    if(req.file && req.file.filename) {
        Postimage=req.file.filename;
    }

    postService.post(postData,req.user,Postimage, res)
        .then(()=> {
            return postService.populateUserData()
        })
        .then( (posts) => {
            res.send({posts})
        }).catch(function (error) {
            res.send(error)
        })

}

exports.fetchPostData = (req,res) => {
    postService.populateUserData()
        .then((posts) => {
            res.send({posts})
        }).catch((error) => {
            res.send(error)
        })
}
