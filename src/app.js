const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const journeysRoutes = require('./routes/journey.routes');

const app = express();

// Config
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use('/journeys', journeysRoutes);

module.exports = app;
