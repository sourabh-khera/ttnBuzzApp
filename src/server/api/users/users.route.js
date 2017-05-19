/**
 * Created by sourabh on 19/5/17.
 */
const userController=require("./users.controller");


const loggedIn = (req, res, next) => {

    if (req.user) {
        next()
    } else {
        res.redirect("/")
    }
};


module.exports=(app)=>{

    app.get("/user",loggedIn,userController.fetchUserData);

};