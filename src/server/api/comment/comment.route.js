/**
 * Created by sourabh on 19/5/17.
 */

const commentController=require("./comment.controller");


const loggedIn = (req, res, next) => {

    if (req.user) {
        next()
    } else {
        res.redirect("/")
    }
};

module.exports=(app)=>{

    app.post("/comment",commentController.createComment);
    app.get("/comment",loggedIn,commentController.fetchCommentsData);

};