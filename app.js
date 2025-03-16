// Day 10: Handling POST Requests
// Parse and handle POST requests in an Express app
const express = require('express');
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main route
app.get('/', (req, res) => {
  res.send('Welcome to the main route!');
});

// Route for the /data path (example of POST)
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  res.status(200).send({ message: 'Data received successfully!' });
});

// Export the app instance to be used in other files
module.exports = app;
