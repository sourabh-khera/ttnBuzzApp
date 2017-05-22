/**
 * Created by sourabh on 21/5/17.
 */

const ComplaintSchema = require("./complaint.model");

exports.complaint = (body) => {
    return new Promise((resolve, reject) => {

        ComplaintSchema.create({
            UserName: body.userName, EmailId: body.emailID,
            Complainttype: body.complaintType, Complaintbody: body.complaintBody, Department: body.Department
        }, (err, data) => {
            if (err) {
                reject({message: "can not create complaint", error: err})
            }
            resolve(data)
        })
    })
};