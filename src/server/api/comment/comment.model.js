/**
 * Created by sourabh on 8/5/17.
 */

const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({

    postId:{
        type:mongoose.Schema.Types.ObjectId,ref:"posts"
    },
    commentedBy:{
        type:mongoose.Schema.Types.ObjectId,ref:"users"
    },
    commentBody:{
        type:String,
    }

},{versionKey:false})