const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Reservation = new Schema({
  journeys: {
    type: Array,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  identificationType: {
    type: String,
    require: true,
  },
  identificationNumber: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Reservations", Reservation);
