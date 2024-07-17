// Load environment variables
require('dotenv').config();

// Import necessary modules
const express = require('express');
const cors = require('cors');
const controller = require('./controllers/error.controllers');
const mainRoutes = require('./routes/main.routes');

// Initialize the Express app
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN.split(","), optionsSuccessStatus: 200 }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/api', mainRoutes);

// Error handling middleware
app.use(controller.error);
app.use(controller.missed);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Status: active: \n\n - http://localhost:${PORT}\n`);
});
