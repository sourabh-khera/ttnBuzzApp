/**
 * Created by sourabh on 21/5/17.
 */

const ComplaintSchema = require("./complaint.model");

exports.complaint = (complaintType,complaintBody, department,userId) => {
    return new Promise((resolve, reject) => {
        ComplaintSchema.create({
            complaintType:complaintType,
            complaintBody:complaintBody,
            department:department,
            userId: userId
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
