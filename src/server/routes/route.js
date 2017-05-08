/**
 * Created by sourabh on 4/5/17.
 */

let GoogleStrategy=require("../auth/googleAuth");
let expressSession=require("express-session");
//let bodyparser=require("body-parser");
let passport=require("passport");


module.exports=(app)=> {

    app.use(expressSession({secret: '4235234643frsdfd'}),
        passport.initialize(),
        passport.session());

    GoogleStrategy.useGoogle();

    app.get("/login/google", passport.authenticate('google', {scope: ['profile', 'email']}));

    app.get("/oauth2callback", passport.authenticate('google', {
        successRedirect: "/buzz",
        failureRedirect: "/"
    }))

}