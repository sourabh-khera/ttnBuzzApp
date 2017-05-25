/**
 * Created by sourabh on 21/5/17.
 */

const complaintservice = require("./complaint.service");
exports.createComplaint = (req, res) => {
    complaintservice.complaint(req.body, req.user)
        .then(
            complaintservice.getUserComplaint(req.user)
        ).then((data) => {
        res.send({
            data
        })
    }).catch((error) => {
        res.send(error)
    })

};


exports.fetchComplaints = (req, res) => {
    complaintservice.getUserComplaint(req.user)
        .then((data) => {
            res.send({
                data
            })
        }).catch((error) => {
        res.send(error)
    })

};