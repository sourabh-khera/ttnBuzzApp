/**
 * Created by sourabh on 5/5/17.
 */

const userModel = require("./users.model");
exports.userData = (userId) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({
            _id: userId
        }, (err, userData) => {
            if (err)
                reject({message: "not able to fetch user", error: err});
            else {

                resolve(userData);
            }
        })

    })

};