// Import the dotenv package to load environment variables
require('dotenv').config();

const app = require('./app'); // Import the app instance configured in app.js

// Get the port from environment variables, default to 3000 if not set
const port = process.env.PORT || 3000; // Use the value from .env or default to 3000

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
