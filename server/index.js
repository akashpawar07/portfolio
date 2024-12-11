const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 7070;

// CORS configuration Middleware
app.use(cors({
  origin : ['http://localhost:5173','https://akashpawar07.github.io/portfolio/'],
  credentials : true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('dist'));

// Database connection
const db_connection = require('./db/databse.js')
const contactModels = require('./models/contactModel.js')

// Contact endpoint with improved error handling
app.post('/contact', async (req, res) => {
  try {
    // Validate input
    const { username, useremail, usermessage } = req.body;
    console.log("Received contact form data:", req.body)

    if (!username || !useremail || !usermessage) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    const details = new contactModels({
      userName: username,
      userEmail: useremail,
      userMessages: usermessage
    });

    const data = await details.save();

    res.status(200).json({
      success: true,
      message: 'Contact details saved successfully',
      data: data
    });

  } catch (error) {
    console.error('Error saving contact details:', error);
    res.status(500).json({
      success: false,
      message: 'Error saving contact details',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});