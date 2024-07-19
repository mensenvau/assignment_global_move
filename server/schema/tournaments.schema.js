const Joi = require("joi");

const commonTournamentFields = {
  name: Joi.string().max(255).required(),
  start_date: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
    .required(),
  end_date: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
    .required(),
};

const postTournamentSchema = Joi.object({
  ...commonTournamentFields,
});

const putTournamentSchema = Joi.object({
  tournament_id: Joi.number().integer().positive().required(),
  ...commonTournamentFields,
});

const delTournamentSchema = Joi.object({
  tournament_id: Joi.number().integer().positive().required(),
});

const addParticipantSchema = Joi.object({
  tournament_id: Joi.number().integer().positive().required(),
  player_id: Joi.number().integer().positive().required(),
});

const delParticipantSchema = Joi.object({
  uid: Joi.number().integer().positive().required(),
});

module.exports = {
  postTournamentSchema,
  putTournamentSchema,
  delTournamentSchema,
  addParticipantSchema,
  delParticipantSchema,
};
