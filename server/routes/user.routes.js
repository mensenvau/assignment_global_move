const { getMe } = require("../controllers/user.js");

module.exports = function (app) {
  app.get("/users/me", getMe); 
};
