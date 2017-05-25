/**
 * Created by sourabh on 19/5/17.
 */
const userController = require("./users.controller");
module.exports = (app, loggedIn) => {
    app.get("/user", loggedIn, userController.fetchUserData);
    app.get("/authuser", loggedIn, userController.fetchUserData)
};