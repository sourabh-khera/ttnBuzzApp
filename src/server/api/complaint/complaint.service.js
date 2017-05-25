/**
 * Created by sourabh on 21/5/17.
 */

const ComplaintSchema = require("./complaint.model");

exports.complaint = (body, user) => {
    return new Promise((resolve, reject) => {
        ComplaintSchema.create({
            complaintType: body.complaintType,
            complaintBody: body.complaintBody,
            department: body.Department,
            userId: user._id
        }, (err, data) => {
            if (err) {
                reject({
                    message: "can not create complaint",
                    error: err
                });
            }
            resolve(data);
        })
    })
};


exports.getUserComplaint = (user) => {
    return new Promise((resolve, reject) => {
        ComplaintSchema
            .find({
                userId: user._id
            })
            .populate('userId')
            .exec((err, data) => {
                if (err) {
                    reject({
                        message: "unable to get user complaints",
                        error: err
                    })
                }
                resolve(data)
            })
    })

};