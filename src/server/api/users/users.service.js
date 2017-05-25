/**
 * Created by sourabh on 5/5/17.
 */

const userModel = require("./users.model");
exports.userData = (userId, res) => {
    userModel.findOne({
        _id: userId
    }, (err, userData) => {
        if (err)
            res.send(err);
        else {

            res.send(userData)
        }
    })
};