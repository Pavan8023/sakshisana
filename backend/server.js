require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Initialize app
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Server configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
);