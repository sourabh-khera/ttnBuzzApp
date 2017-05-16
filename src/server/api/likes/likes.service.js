/**
 * Created by sourabh on 15/5/17.
 */

const likesModel = require("./likes.model");

exports.likes = (postid, userid,Likestatus) => {

    return new Promise((resolve, reject) => {

            likesModel.update({postId:postid,likedBy:userid},{$set:{status:Likestatus}},{upsert:true},(err,data)=>{
                    if(err){

                        reject({message:"error while liking",error:err})
                    }else{

                        resolve(data)
                    }
            })
    })
};


exports.numofLikes=(postid,status)=>{

    return new Promise((resolve,reject)=>{
         likesModel.count({postId:postid,status:status},(error,count)=>{
             if(error){
                  reject({message:"likes could not be fetch",error:error})
              }else{
                  resolve(count)
              }
         })
    })
};

exports.numofDisLikes=(postid,status)=>{

    return new Promise((resolve,reject)=>{
        likesModel.count({postId:postid,status:status},(error,count)=>{
            if(error){
                reject({message:"likes could not be fetch",error:error})
            }else{
                resolve(count)
            }
        })
    })
};
