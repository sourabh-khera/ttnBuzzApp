/**
 * Created by sourabh on 27/5/17.
 */

const Joi = require("joi");

exports.schema = Joi.object().keys({

    userid: Joi.required(),
    postid: Joi.required(),
    comment: Joi.string().required(),

});