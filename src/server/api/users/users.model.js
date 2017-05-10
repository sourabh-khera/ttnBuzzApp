/**
 * Created by sourabh on 5/5/17.
 */

const Mongoose=require("mongoose");
const UsersSchema=new Mongoose.Schema({

    name:{
       type:String,
    },
    image:{
        type:String,
    },
    email:{
        type:String,
    },
    role:{
        type:String,
        default:"Developer"
    },

},{versionKey:false,timestamps:true})

module.exports=Mongoose.model('User',UsersSchema)

