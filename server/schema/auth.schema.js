const Joi = require('joi');

const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(8).max(200).required()
});

const registrationSchema = Joi.object({
    full_name: Joi.string().max(200).required(),
    email: Joi.string().email().max(200).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(/([a-zA-Z0-9!@#$%^&*])/).message('Password must contain at least one letter, one number, or one special character').min(5).max(200).required()
});

module.exports = {
    loginSchema, registrationSchema
}