const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 7070;

// CORS configuration Middleware
app.use(cors({
  // Accept requests from specific domains
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc)
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      'http://localhost:5173',
      'https://akashpawar07.github.io',
      'https://akashpawar07.github.io/portfolio',
      'https://akashpawar07.github.io/portfolio/',
      'https://portfolio-xe40.onrender.com'
    ];

    // Check if the origin is in the allowed list or matches the render.com pattern
    if (allowedOrigins.includes(origin) || origin.match(/^https:\/\/.*\.onrender\.com$/)) {
      callback(null, true);
    } else {
      console.log('Blocked origin:', origin);
      // Always allow during troubleshooting - this is the key line
      callback(null, true);
      // For production: callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Explicitly handle preflight requests for all routes
app.options('*', cors());

// Request body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));

// Debug middleware to log requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl} - Origin: ${req.headers.origin || 'unknown'}`);
  next();
});

// Database connection
const db_connection = require('./db/databse.js');
const contactModels = require('./models/contactModel.js');
const ratingAndFeedbackModel = require('./models/ratingAndFeedbackModel.js')

// Contact endpoint with improved error handling
app.post('/contact', async (req, res) => {
  try {
    // console.log("Received contact form data:", req.body);

    // Validate input
    const { username, useremail, usermessage } = req.body;

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

// POST route for creating rating and feedback
app.post("/ratingandfeedback", async (req, res) => {
  try {
    // Validate input
    const { name, rating, comment } = req.body;

    if (!name || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory"
      });
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5"
      });
    }

    // Create new rating and feedback document
    const inputData = new ratingAndFeedbackModel({
      name,
      rating,
      comment
    });

    const data = await inputData.save();

    res.status(201).json({
      success: true,
      message: 'Rating and feedback saved successfully',
      data: data
    });

  } catch (error) {
    console.error('Error saving rating and feedback details:', error);

    res.status(500).json({
      success: false,
      message: 'Error saving rating and feedback details',
      error: error.message
    });
  }
});

// GET route for fetching all rating and feedback
app.get("/ratingandfeedback", async (req, res) => {
  try {
    // Fetch data from database
    const data = await ratingAndFeedbackModel.find();
    console.log("Fetched data:", data);

    if (!data || data.length === 0) {
      console.log("No rating and feedback data found");
      return res.status(404).json({
        success: false,
        message: "No rating and feedback data found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Rating and feedback data fetched successfully",
      count: data.length,
      data: data
    });

  } catch (error) {
    console.error('Error fetching rating and feedback data:', error);

    res.status(500).json({
      success: false,
      message: "Error fetching rating and feedback data",
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