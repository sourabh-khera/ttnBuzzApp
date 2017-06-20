/**
 * Created by sourabh on 19/5/17.
 */
const likeController = require("./likes.controller");


module.exports = (app,loggedIn) => {

    app.post("/like", loggedIn,likeController.createLike);
    app.get("/like", loggedIn, likeController.fetchlikesData);


};