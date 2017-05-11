/**
 * Created by sourabh on 8/5/17.
 */

const postService = require("./post.service")
exports.createPost = (req,res) => {
    const postData = req.body;
    postService.post(postData,req.user, res)
        .then(()=> {
            return postService.populateUserData()
        })
        .then( (posts) => {
            res.send({posts})
        }).catch(function (error){
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
