const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Journey = new Schema({
  origin: {
    type: String,
    require: [true, "El campo origen es requerido"],
  },
  destination: {
    type: String,
    require: [true, "El campo destino es requerido"],
  },
  departureDate: {
    type: String,
    require: [true, "El campo fecha de salida es requerido"],
  },
  arrivalDate: {
    type: String,
    require: [true, "El campo fecha de llegada es requerido"],
  },
  stop: {
    type: Number,
    require: [true, "El campo paradas es requerido"],
  },
  price: {
    type: Number,
    require: [true, "El campo precio es requerido"],
  },
  duration: {
    type: Number,
    require: [true, "El campo duración es requerido"],
  },
  airline: {
    type: String,
    require: [true, "El campo aerolinea es requerido"],
  },
  flight: {
    type: String,
    require: [true, "El campo vuelo es requerido"],
  },
});

module.exports = mongoose.model("Journeys", Journey);
