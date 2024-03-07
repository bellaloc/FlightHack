// app.js

// Example Express app setup

const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const config = require('./config');

const app = express();

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
