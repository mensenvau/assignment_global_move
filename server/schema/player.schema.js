const Joi = require("joi");

const commonPlayerFields = {
  user_id: Joi.number().integer().positive().allow(null, 0),
  full_name: Joi.string().max(255).required(),
  age: Joi.number().integer().max(200).positive().required(),
  rating: Joi.number().integer().positive().required(),
  country_id: Joi.number().integer().positive().required(),
};

const postPlayerSchema = Joi.object({
  ...commonPlayerFields,
});

const putPlayerSchema = Joi.object({
  player_id: Joi.number().integer().positive().required(),
  ...commonPlayerFields,
});

const delPlayerSchema = Joi.object({
  player_id: Joi.number().integer().positive().required(),
});

module.exports = {
  postPlayerSchema,
  putPlayerSchema,
  delPlayerSchema,
};
