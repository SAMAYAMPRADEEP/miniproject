const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve all static files from current directory
app.use(express.static(__dirname));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
