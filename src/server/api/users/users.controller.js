const userService = require("./users.service");

exports.fetchUserData = (req, res) => {
    const userId = req.user._id;
    userService.userData(userId, res)
        .then((userData) => {
            res.send({
                userData
            })
        }).catch(error => res.send(error))
};

exports.fetchUserEmail = (req, res) => {
    const userEmail = req.user.email;
    res.send({
        userEmail
    });
};