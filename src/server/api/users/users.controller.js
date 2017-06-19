const userService = require("./users.service");

exports.fetchUserData = (req, res) => {
    const userId = req.user_id;
    console.log("user------------",userId);
    userService.userData(userId)
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