const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Journey = new Schema({
  code: {
    type: String,
    require: [true, "El campo código es requerido"],
    unique: [true, "El campo código no debe repetirse"],
  },
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
  price: {
    type: Number,
    require: [true, "El campo precio es requerido"],
  },
});

module.exports = mongoose.model("Journeys", Journey);
