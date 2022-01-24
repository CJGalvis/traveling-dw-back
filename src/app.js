const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const journeysRoutes = require("./routes/journey.routes");
const usersRoutes = require("./routes/user.routes");
const reservationsRoutes = require("./routes/reservation.routes");

const app = express();

// Config
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/journeys", journeysRoutes);
app.use("/api/auth", usersRoutes);
app.use("/api/reservations", reservationsRoutes);
app.get("/", (req, res) => {
  res.send("Hi");
});

module.exports = app;
