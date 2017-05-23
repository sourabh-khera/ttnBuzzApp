/**
 * Created by sourabh on 21/5/17.
 */

const Mongoose = require("mongoose");

const ComplaintSchema = new Mongoose.Schema({
    userId:{type:Mongoose.Schema.Types.ObjectId,ref:"User"},
    complaintType: {type: String,},
    complaintBody: {type: String,},
    department: {type: String},
    status: {
        type: String,
        enum: ['open', 'resolved', 'closed'],
        default: 'open'
    }
},{versionKey:false,timestamps:true});

module.exports=Mongoose.model("Complaint",ComplaintSchema);