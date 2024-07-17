const express = require("express");
const app = express();
const { checkAuth, checkAdmin } = require("../controllers/public/auth.js");

require("./public/auth.routes")(app);

/* user and admin permissions work here. */
app.use(checkAuth);
require("./user/user.routes")(app);

/* only admin permissions work here. */
app.use(checkAdmin);
require("./admin/players.routes")(app);

module.exports = app;
