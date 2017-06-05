/**
 * Created by sourabh on 4/5/17.
 */

let GoogleStrategy = require("../auth/googleAuth");
let expressSession = require("express-session");
let passport = require("passport");
const commentRoutes = require("../api/comment/comment.route");
const postsRoute = require("../api/post/posts.route");
const userRoute = require("../api/users/users.route");
const likesRoute = require("../api/likes/likes.route");
const complaintRoute = require("../api/complaint/complaint.route");


const loggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(403);
        res.send("");
    }
};

module.exports = (app) => {

    app.use(expressSession({
        secret: '4235234643frsdfd',
    }));
    app.use(
        passport.initialize(),
        passport.session());

    GoogleStrategy.useGoogle();
    app.get("/login/google", passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get("/oauth2callback", passport.authenticate('google'), (req, res) => {
        if (req.user) {
            res.cookie('username', req.user.email, {
                maxAge: 900000,
                httpOnly: false
            });
            res.redirect('/buzz/create-post')
        } else {
            res.redirect('/')
        }
    });

    app.get('/logout', (req, res) => {
        res.cookie('username', '', {
            maxAge: 900000,
            httpOnly: false
        });
        req.logout();
        res.send({
            loggedOut: true
        });
    });
    commentRoutes(app, loggedIn);
    postsRoute(app, loggedIn);
    likesRoute(app, loggedIn);
    userRoute(app, loggedIn);
    complaintRoute(app, loggedIn);

};