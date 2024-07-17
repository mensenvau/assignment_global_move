const { getMe } = require("../../controllers/admin/players.js");

module.exports = function (app) {
  app.get("/admin/players", getMe);
  app.post("/admin/players", getMe);
  app.put("/admin/players", getMe);
  app.delete("/admin/players", getMe);
};
