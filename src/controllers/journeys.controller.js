const JourneyModel = require("../models/Journey");

const createJourney = async (req, res) => {
  try {
    const { body } = req;
    const newJourney = new JourneyModel({
      code: body.code,
      origin: body.origin,
      destination: body.destination,
      departureDate: body.departureDate,
      arrivalDate: body.returnDate,
      price: body.price,
    });

    await newJourney.save();
    res.status(200).send({ message: "Vuelo creado exitosamente" });
  } catch (error) {
    errorResponse(res, error);
  }
};

const getJourneys = async (req, res) => {
  try {
    const items = await JourneyModel.find();
    res.status(200).send({ items });
  } catch (error) {
    errorResponse(res, error);
  }
};

const getJourneyForId = (req, res) => {};


const errorResponse = (res, error) => {
  res.status(500).send({ message: "Server internal error", error  });
};

module.exports = {
  createJourney,
  getJourneys,
  getJourneyForId,
};
