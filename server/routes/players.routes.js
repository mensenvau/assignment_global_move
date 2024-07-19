const { getPlayersByName, getPlayers, addPlayer, putPlayer, delPlayer, getCountries, getUsersByName } = require("../controllers/players.js");
const { postPlayerSchema, putPlayerSchema, delPlayerSchema } = require("../schema/player.schema.js");
const { body } = require("uzdev/joi");

module.exports = function (app) {
  app.get("/admin/countries", getCountries);
  app.get("/admin/users/by", getUsersByName);
  app.get("/admin/players/by", getPlayersByName);
  app.get("/admin/players", getPlayers);
  app.post("/admin/players", body(postPlayerSchema), addPlayer);
  app.put("/admin/players", body(putPlayerSchema), putPlayer);
  app.delete("/admin/players",body(delPlayerSchema), delPlayer);
};