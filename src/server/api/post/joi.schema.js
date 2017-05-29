/**
 * Created by sourabh on 26/5/17.
 */

const Joi = require("joi");

exports.schema = Joi.object().keys({
    postBody: Joi.string().allow(''),
    status: Joi.string().valid(['Activity','Lost n Found']).required(),
    userId: Joi.required(),
    Postimage: Joi.string().allow(null),
});