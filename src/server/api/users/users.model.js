/**
 * Created by sourabh on 5/5/17.
 */

const Usermongoose=require("../../constants/constant");
let usersSchema=new Usermongoose.mongoose.Schema({

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
        default:"User"
    },
    datecreated:{
        type:Date,
        default:Date.now,
    }

},{versionKey:false})

module.exports=Usermongoose.mongoose.model('users',usersSchema)

