/**
 * Created by sourabh on 21/5/17.
 */

const complaintservice = require("./complaint.service");
exports.createComplaint = (req, res) => {
    console.log("body------", req.body);
    complaintservice.complaint(req.body)
        .then((data) => {
            res.send({data})
        }).catch((error) => {
        res.send(error);
    })

};