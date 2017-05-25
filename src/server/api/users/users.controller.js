/**
 * Created by sourabh on 5/5/17.
 */
const userService = require("./users.service");

exports.fetchUserData = (req, res) => {
    const userId = req.user;
    console.log('in the controller#################################')
    userService.userData(userId, res)
};

exports.fetchUserEmail = (req, res) => {
    const userEmail = req.user.email;
    res.send({
        userEmail
    });
};