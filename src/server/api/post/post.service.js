/**
 * Created by sourabh on 8/5/17.
 */


const postModel=require("./post.model")
exports.post=(postData,user,res)=>{

    postModel.create({postBody:postData,postedBy:user._id},(err,post)=>{
        if (err) {
            res.send({ message: "error while creating user", error: err });
        } else {
            populateUserData(res)
        }
    })
};

populateUserData=(res)=> {
    postModel.
    findOne({})
        .sort({createdAt:-1})
    .populate("postedBy")
    .exec(function (err, post) {
        if (err) return console.log(err)
            console.log(post)
            res.send(post);
        });
    }