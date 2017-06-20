/**
 * Created by sourabh on 21/5/17.
 */

const complaintservice = require("./complaint.service");
const Joi = require("joi");
const validateSchema = require("./complaint.joi.schema.js");
exports.createComplaint = (req, res) => {

    const complaintType = req.body.complaintType;
    const complaintBody = req.body.complaintBody.trim();
    const department = req.body.Department;
    const userId = req.user_id;

    Joi.validate({
        complaintType: complaintType,
        complaintBody: complaintBody,
        department: department,
        userId: userId
    }, validateSchema.schema, (err, data) => {
        if (err) {
            res.status(403);
        } else {
            complaintservice.complaint(complaintType, complaintBody, department, userId)
                .then(
                    complaintservice.getUserComplaint(userId)
                ).then((data) => {
                res.send({
                    data
                })
            }).catch((error) => {
                res.send(error)
            })
        }
    });


};


exports.fetchComplaints = (req, res) => {
    const userId=req.user_id;
    complaintservice.getUserComplaint(userId)
        .then((data) => {
            res.send({
                data
            })
        }).catch((error) => {
        res.send(error)
    })

};