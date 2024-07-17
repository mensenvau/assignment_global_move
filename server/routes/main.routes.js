const express = require('express');
const app = express()
const { authCheck, authStop } = require('../controllers/auth.controllers');

// auth check
app.use(authCheck)

require('./auth.routes')(app);

// auth stop
app.use(authStop)

// require('./user.routes')(app); 
module.exports = app 