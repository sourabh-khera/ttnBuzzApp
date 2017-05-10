/**
 * Created by sourabh on 4/5/17.
 */

let GoogleStrategy=require("../auth/googleAuth");
let expressSession=require("express-session");
let passport=require("passport");
const postController=require("../api/post/post.controller")
const userController=require("../api/users/users.controller")

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

    app.get("/logout",(req,res)=>{
        req.logout();
        res.redirect("/")
    })

    app.post("/post",postController.createPost)
    app.get("/post",userController.fetchUserData)

}