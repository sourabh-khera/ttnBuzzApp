/**
 * Created by sourabh on 21/5/17.
 */

const Mongoose = require("mongoose");

const ComplaintSchema = new Mongoose.Schema({

    UserName:{type:String,},
    EmailId:{type:String,},
    Complainttype: {type: String,},
    Complaintbody: {type: String,},
    Department: {type: String},
    Status: {
        type: String,
        enum: ['open', 'resolved', 'closed'],
        default: 'open'
    }
},{versionKey:false,timestamps:true});

module.exports=Mongoose.model("Complaint",ComplaintSchema);