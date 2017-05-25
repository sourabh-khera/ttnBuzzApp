/**
 * Created by sourabh on 21/5/17.
 */

const ComplaintController = require("./complaint.controller");


module.exports = (app, loggedIn) => {

    app.post("/complaint", ComplaintController.createComplaint);
    app.get("/complaint", loggedIn, ComplaintController.fetchComplaints)
};