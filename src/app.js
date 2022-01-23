const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const journeysRoutes = require('./routes/journey.routes');

const app = express();

// Config
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/journeys', journeysRoutes);

module.exports = app;
