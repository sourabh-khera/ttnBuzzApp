/**
 * Created by sourabh on 8/5/17.
 */
const Postmongoose=require("../../constants/constant")

const postSchema = new Postmongoose.mongoose.Schema({

    createdBy: {
        type: String,
    },
    image: {
        type: String,
    },
    likes:{
        type:Array
    },
    dislikes:{
        type:Array,
    },
    comment: [
        {
            userId: {
                type: Number
            },
            commentBody: {
                type: String,
            },

        }
    ]

},{versionKey:false,timestamp:true});

module.exports=Postmongoose.mongoose.model("posts",postSchema)