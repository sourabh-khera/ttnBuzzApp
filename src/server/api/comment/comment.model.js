/**
 * Created by sourabh on 8/5/17.
 */

const Mongoose = require("mongoose");

const CommentSchema = new Mongoose.Schema({

    postId: {
        type: String,
    },
    userId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    commentBody: {
        type: String,
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = Mongoose.model('Comment', CommentSchema);