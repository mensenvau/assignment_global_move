const { getMatches, buildMatches, setResultMatches, getLeaderboard } = require("../controllers/matches.js");
const { resultSchema } = require("../schema/matches.schema.js");
const { body } = require("uzdev/joi");

module.exports = function (app) {
  app.get("/admin/leaderboard", getLeaderboard);
  app.get("/admin/matches", getMatches);
  app.get("/admin/matches/build", buildMatches);
  app.post("/admin/matches/result", body(resultSchema), setResultMatches);
};
