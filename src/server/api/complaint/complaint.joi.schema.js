/**
 * Created by sourabh on 27/5/17.
 */

const Joi = require("joi");

exports.schema = Joi.object().keys({
    complaintType: Joi.string().required(),
    complaintBody: Joi.string().trim().required(),
    department: Joi.string().required(),
    userId: Joi.required(),
});