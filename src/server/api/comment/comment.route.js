/**
 * Created by sourabh on 19/5/17.
 */

const commentController = require("./comment.controller");


module.exports = (app, loggedIn) => {

    app.post("/comment",loggedIn, commentController.createComment);
    app.get("/comment", loggedIn, commentController.fetchCommentsData);
    app.delete("/comment",commentController.deletecomment);

};