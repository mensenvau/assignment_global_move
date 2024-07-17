const express = require('express');
const app = express()
const { checkAuth } = require('../controllers/auth.controllers');

require('./auth.routes')(app);

/* auth stop here */
app.use(checkAuth)

// require('./user.routes')(app);
module.exports = app 