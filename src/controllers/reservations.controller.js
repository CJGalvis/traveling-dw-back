const ReservationModel = require("../models/Reservation");

const createReservation = async (req, res) => {
  try {
    const { body } = req;
    const { email } = req;
    const newReservation = new ReservationModel({ ...body, ...email });
    await newReservation.save();
    res.status(200).send({
      reservation: newReservation,
      message: "Reservación creada exitosamente.",
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error);
  }
};

const getReservation = async (req, res) => {
  try {
    const { body } = req;
    const reservationdb = await ReservationModel.findOne({
      $and: [
        { email: body.email },
        { identificationNumber: body.identificationNumber },
      ],
    });
    if (!reservationdb)
      return res.status(400).send({
        message: "No existe un reservación con estos datos",
      });

    res.status(200).send({
      reservation: reservationdb,
    });
  } catch (error) {
    console.log(error);
    errorResponse(res, error);
  }
};

module.exports = {
  createReservation,
  getReservation,
};
