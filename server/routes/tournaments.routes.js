const { getTournaments, getTournamentById, addTournament, putTournament, delTournament, addParticipant, delParticipant } = require("../controllers/tournaments.js");
const { postTournamentSchema, putTournamentSchema, delTournamentSchema, addParticipantSchema, delParticipantSchema } = require("../schema/tournaments.schema.js");
const { body } = require("uzdev/joi");

module.exports = function (app) {
  app.get("/admin/tournaments", getTournaments);
  app.get("/admin/tournaments/:id", getTournamentById);
  app.post("/admin/tournaments", body(postTournamentSchema), addTournament);
  app.put("/admin/tournaments", body(putTournamentSchema), putTournament);
  app.delete("/admin/tournaments", body(delTournamentSchema), delTournament);
  app.post("/admin/participant", body(addParticipantSchema), addParticipant);
  app.delete("/admin/participant", body(delParticipantSchema), delParticipant);
};
