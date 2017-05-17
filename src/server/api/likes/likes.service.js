/**
 * Created by sourabh on 15/5/17.
 */

const likesModel = require("./likes.model");

exports.likes = (postid, userid,Likestatus) => {

    return new Promise((resolve, reject) => {

            likesModel.update({postId:postid,likedBy:userid},{$set:{status:Likestatus}},{upsert:true},(err,data)=>{
                if (err) {
                    reject({message:"error while liking",error:err})
                }
                resolve(data)
            })
    })
};


exports.getUserData=()=>{
    return new Promise((resolve,reject)=>{
        likesModel
            .find({})
            .populate('likedBy')
            .exec((err,data)=>{
                if(err){
                    reject({message:"unable to fetch user data with likes nd dislikes",error:err})
                }else{
                    resolve(data)
                }
            })
    })
};