/**
 * Created by sourabh on 8/5/17.
 */

const Mongoose=require("mongoose");
const PostSchema = Mongoose.Schema({

    postedBy: { type:Mongoose.Schema.Types.ObjectId,ref:'User' },
    postBody:{type:String},

    image: {
        type: String,
    },

    likes:{
        type:Array
    },
    dislikes:{
        type:Array,
    },
    status:{
        type:String,
    }

},{versionKey:false,timestamps:true});

module.exports = Mongoose.model("Post", PostSchema)