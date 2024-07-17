const { getMe } = require("../../controllers/user/user.js");

module.exports = function (app) {
  app.get("/users/me", getMe); 
};
