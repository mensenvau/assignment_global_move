const Joi = require('joi');

const resultSchema = Joi.object({
  match_id: Joi.number().integer().positive().allow(null, 0),
  result: Joi.string().valid("player1", "player2", "draw").required()
});

module.exports = {
  resultSchema
};
