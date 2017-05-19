/**
 * Created by sourabh on 4/5/17.
 */

let GoogleStrategy=require("../auth/googleAuth");
let expressSession=require("express-session");
let passport=require("passport");
const commentRoutes=require("../api/comment/comment.route");
const postsRoute=require("../api/post/posts.route");
const userRoute=require("../api/users/users.route");
const likesRoute=require("../api/likes/likes.route");


module.exports=(app) => {

    app.use(expressSession({secret: '4235234643frsdfd'}),
        passport.initialize(),
        passport.session());

    GoogleStrategy.useGoogle();

    app.get("/login/google", passport.authenticate('google', {scope: ['profile', 'email']}));


    app.get("/oauth2callback", passport.authenticate('google', {
        successRedirect: "/buzz",
        failureRedirect: "/"
    }));

    app.get("/logout",(req,res) => {
        req.logout();
        res.redirect("/");
    });

    commentRoutes(app);
    postsRoute(app);
    likesRoute(app);
    userRoute(app);


};