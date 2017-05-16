/**
 * Created by sourabh on 15/5/17.
 */

const Mongoose=require("mongoose");


const LikesSchema=new Mongoose.Schema({
    postId:{
        type:String,
    },
    likedBy:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    status:{
        type:String
    }
},{versionKey:false,timestamps:true});

module.exports=Mongoose.model('Like',LikesSchema);