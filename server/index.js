import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';

// Local Imports - Extensions (.js) are REQUIRED for ESM
import db_connection from './db/databse.js';
import contactModels from './models/contactModel.js';
import ratingAndFeedbackModel from './models/ratingAndFeedbackModel.js';
import { sendContactEmail } from "./config/sendMailFormat.js";

db_connection();
const app = express();
const PORT = process.env.PORT || 7070;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logoPath = path.join(__dirname, 'public', 'favIcon.svg');

// CORS configuration Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://akashpawar07.github.io" // REMOVE the sub-paths (/portfolio, etc.)
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);

    const isAllowed = allowedOrigins.includes(origin) ||
      origin.match(/^https:\/\/.*\.onrender\.com$/);

    if (isAllowed) {
      callback(null, true);
    } else {
      console.log('Blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));


app.options('*', cors());

// Request body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));

// Debug middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl} - Origin: ${req.headers.origin || 'unknown'}`);
  next();
});


// Contact endpoint with synchronized DB and Email logic
app.post('/contact', async (req, res) => {
  // 1. Ensure DB is connected before proceeding
  await db_connection();

  try {
    const { username, useremail, usermessage } = req.body;

    // 2. Validation
    if (!username || !useremail || !usermessage) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // 3. Save to Database
    const details = new contactModels({
      userName: username,
      userEmail: useremail,
      userMessages: usermessage
    });

    const data = await details.save();
    console.log("Data saved to DB ✅");

    // 4. Send Email Notification
    try {
      console.log("Attempting to send email...");

      await sendContactEmail(data.userName, data.userEmail, data.userMessages, logoPath);

      console.log("Email sent successfully");

      console.log(`name:${data.userName}, email:${data.userEmail}, message:${data.userMessages} - in index.js`)

    } catch (mailError) {
      console.error('Email sending failed ❌:', mailError.message);
    }

    // 5. Final Response to Frontend
    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      data: data // This contains the userName for MessagePopup
    });

  } catch (error) {
    console.error('Final Route Error ❌:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// POST Rating and Feedback
app.post("/ratingandfeedback", async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    if (!name || !rating || !comment) {
      return res.status(400).json({ success: false, message: "All fields mandatory" });
    }

    const inputData = new ratingAndFeedbackModel({ name, rating, comment });
    const data = await inputData.save();

    res.status(201).json({ success: true, message: 'Saved successfully', data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error saving feedback', error: error.message });
  }
});

// GET Rating and Feedback
app.get("/ratingandfeedback", async (req, res) => {
  try {
    const data = await ratingAndFeedbackModel.find();
    if (!data || data.length === 0) {
      return res.status(404).json({ success: false, message: "No data found" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching data", error: error.message });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!s', error: err.message });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
