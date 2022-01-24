const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    require: [true, "El campo nombres es requerido"],
  },
  lastname: {
    type: String,
    require: [true, "El campo apelidos es requerido"],
  },
  email: {
    type: String,
    require: [true, "El campo fecha de salida es requerido"],
  },
  identificationNumber: {
    type: String,
    require: [true, "El campo identificación es requerido"],
  },
  identificationType: {
    type: String,
    require: [true, "El campo identificación es requerido"],
  },
  password: {
    type: String,
    require: [true, "El campo contraseña es requerida"],
  },
});

module.exports = mongoose.model("Users", User);
