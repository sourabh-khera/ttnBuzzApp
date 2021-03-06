/**
 * Created by sourabh on 19/5/17.
 */
const postController = require("./post.controller");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/home/sourabh/Desktop/ttndbuzzapp/src/server/public/upload")
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
});
const upload = multer({
    storage: storage
});



module.exports = (app, loggedIn) => {


    app.post("/post",loggedIn,upload.single('image_path'), postController.createPost);
    app.get("/post", loggedIn, postController.fetchPostData);

};