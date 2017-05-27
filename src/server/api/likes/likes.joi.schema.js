/**
 * Created by sourabh on 27/5/17.
 */

const Joi = require("joi");
//Joi.objectId = require('joi-objectid')(Joi);

exports.schema = Joi.object().keys({
    postid: Joi.string().required(),
    Likestatus: Joi.string().allow(''),
    userid: Joi.required(),

});