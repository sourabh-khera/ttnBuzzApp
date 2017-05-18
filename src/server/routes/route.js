/**
 * Created by sourabh on 4/5/17.
 */

let GoogleStrategy=require("../auth/googleAuth");
let expressSession=require("express-session");
let passport=require("passport");
const postController=require("../api/post/post.controller");
const userController=require("../api/users/users.controller");
const likeController=require("../api/likes/likes.controller");
const commentController=require("../api/comment/comment.controller")
const multer=require("multer");

const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"/home/sourabh/Desktop/ttndbuzzapp/src/server/public/upload")
    },

    filename: (req,file,cb)=>{
        cb(null, Date.now()+file.originalname)
    }
});


const loggedIn = (req, res, next) => {

    if (req.user) {
        next()
    } else {
        res.redirect("/")
    }
};

const upload=multer({storage:storage});



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


    app.post("/post",upload.single('image_path'),postController.createPost);
    app.get("/post", loggedIn, postController.fetchPostData);
    app.get("/user",loggedIn,userController.fetchUserData);
    app.post("/like",likeController.createLike);
    app.get("/like",loggedIn,likeController.fetchlikesData);
    app.post("/comment",commentController.createComment);
    app.get("/comment",loggedIn,commentController.fetchCommentsData);

};