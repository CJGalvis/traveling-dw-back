const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User");

const login = async (req, res) => {
  try {
    const login = req.body;
    const userDb = await UserModel.findOne({
      email: login.email,
      enable: true,
    });
    if (!userDb)
      return res.status(400).send({
        message: "El usuario no existe o no se encuentra activo",
      });

    if (!bcrypt.compareSync(login.password, userDb.password || ""))
      return res.status(404).send({
        message: "Usuario o contraseña incorrecto",
      });

    const payload = JSON.parse(JSON.stringify(userDb, ["email"]));
    const token = jwt.sign(payload, process.env.JWT_SECRET || "", {
      expiresIn: process.env.EXPIRES_TOKEN,
    });
    res.status(200).send({
      message: `Acceso correcto ${userDb.name}`,
      token,
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error);
  }
};

const register = async (req, res) => {
  try {
    const dataUser = req.body;
    const userDB = await UserModel.findOne({
      $and: [
        { identificationType: dataUser.identificationType },
        { identificationNumber: dataUser.identificationNumber },
      ],
    });
    if (userDB)
      return res.status(400).send({
        message: "Ya existe un usuario con estos datos",
        data: dataUser,
      });

    const dataNewUser = {
      name: dataUser.name,
      lastname: dataUser.lastname,
      identificationNumber: dataUser.identificationNumber,
      identificationType: dataUser.identificationType,
      password: bcrypt.hashSync(dataUser.password, 10),
      email: dataUser.email,
    };
    const newUser = new UserModel(dataNewUser);
    await newUser.save();
    const payload = JSON.parse(JSON.stringify(dataNewUser, ["email"]));
    const token = jwt.sign(payload, process.env.JWT_SECRET || "", {
      expiresIn: process.env.EXPIRES_TOKEN,
    });
    res.status(200).send({
      message: "Usuario creado exitosamente.",
      data: newUser,
      token
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error);
  }
};

const errorResponse = (res, error) => {
  res.status(500).send({ message: "Server internal error", error });
};

module.exports = {
  login,
  register
};
