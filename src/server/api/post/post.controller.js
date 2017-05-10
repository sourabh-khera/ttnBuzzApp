/**
 * Created by sourabh on 8/5/17.
 */

const postService=require("./post.service")
exports.createPost=(req,res)=>{
    const postData=req.body.data;
    //const postUserId=req.user._id
    postService.post(postData,req.user,res)

}
