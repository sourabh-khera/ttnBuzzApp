/**
 * Created by sourabh on 5/5/17.
 */
const userService=require("./users.service")

exports.fetchUserData=(req,res)=>{
    const userId=req.user;

    userService.userData(userId,res)

}