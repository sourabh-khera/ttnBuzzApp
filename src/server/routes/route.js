/**
 * Created by sourabh on 4/5/17.
 */

let GoogleStrategy = require("../auth/googleAuth");
let passport = require("passport");
const commentRoutes = require("../api/comment/comment.route");
const postsRoute = require("../api/post/posts.route");
const userRoute = require("../api/users/users.route");
const likesRoute = require("../api/likes/likes.route");
const complaintRoute = require("../api/complaint/complaint.route");
const jwt_token = require("jsonwebtoken");

const loggedIn = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt_token.verify(token, process.env.SECRET_KEY, (err, decode) => {
                if (err) {
                    res.status(500).send("invalid token")
                } else {
                    const decodedData = jwt_token.decode(token);
                    req.user_id = decodedData.id;
                    next();
                }
            }
        )
    } else {
        res.send("plz send the token")
    }

};


module.exports = (app) => {
    app.use(
        passport.initialize());

    GoogleStrategy.useGoogle();
    app.get("/login/google", passport.authenticate('google', {
        session: false,
        scope: ['profile', 'email']
    }));
    app.get("/oauth2callback", passport.authenticate('google'), (req, res) => {

        const user = {
            id: req.user._id,
        };
        const token = jwt_token.sign(user, process.env.SECRET_KEY, {expiresIn: 5000});
        if (true) {
            res.cookie('token', token, {
                maxAge: 900000,
                httpOnly: false
            });
            res.redirect('/buzz/create-post')
        } else {
            res.redirect('/')
        }
    });

    app.get('/logout', (req, res) => {
        res.cookie('token', '', {
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