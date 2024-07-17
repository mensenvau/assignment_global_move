const Joi = require('joi');

const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30),
    password: Joi.string().min(8).max(200).required()
});

const registrationSchema = Joi.object({
    full_name: Joi.string().max(200).required(),
    email: Joi.string().email().max(200).required(),
    username: Joi.string().alphanum().min(3).max(30),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/).min(8).max(200).required()
});

module.exports = {
    loginSchema, registrationSchema
}