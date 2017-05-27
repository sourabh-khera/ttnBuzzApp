/**
 * Created by sourabh on 19/5/17.
 */
const likeController = require("./likes.controller");


const loggedIn = (req, res, next) => {

    if (req.user) {
        next()
    } else {
        res.sendStatus("unauthorised access", 403);
    }
};

module.exports = (app) => {

    app.post("/like", loggedIn,likeController.createLike);
    app.get("/like", loggedIn, likeController.fetchlikesData);


};