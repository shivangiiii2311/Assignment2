const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://shivangiii2311:6BBCMOpUeyrijATP@assignment2.1fm7jii.mongodb.net/?retryWrites=true&w=majority&appName=Assignment2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Start the server on port 8080
server.listen(8080, function () {
    console.log(`Server is running on http://localhost:8080`);
});
