const express = require("express");
const app = express();
const { checkAuth, checkAdmin } = require("../controllers/auth.js");

require("./auth.routes")(app);

/* user and admin permissions work here. */
app.use(checkAuth);
require("./user.routes")(app);

/* only admin permissions work here. */
app.use(checkAdmin);
require("./players.routes")(app);
require("./tournaments.routes.js")(app);
require("./matches.routes.js")(app);

module.exports = app;
