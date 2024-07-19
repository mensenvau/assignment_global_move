// Load environment variables
require('dotenv').config();
 
const express = require('express');
const cors = require('cors');
const controller = require('./controllers/error.js'); 
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN.split(","), optionsSuccessStatus: 200 }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',  require('./routes/main.routes'));

// Error handling middleware
app.use(controller.error);
app.use(controller.missed);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Status: active: \n\n - http://localhost:${PORT}\n`);
});
