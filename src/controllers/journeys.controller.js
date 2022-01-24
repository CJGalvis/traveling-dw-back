const JourneyModel = require("../models/Journey");

const createJourney = async (req, res) => {
  try {
    const { body } = req;
    const newJourney = new JourneyModel({ ...body });

    await newJourney.save();
    res.status(200).send({ message: "Vuelo creado exitosamente" });
  } catch (error) {
    console.log(error);
    errorResponse(res, error);
  }
};

const getJourneys = async (req, res) => {
  try {
    let query = {};
    query = Object.assign(
      {
        $and: [
          { origin: new RegExp(`${req.body.origin}.*`, "i") },
          { destination: new RegExp(`${req.body.destination}.*`, "i") },
        ],
      },
      query
    );
    const items = await JourneyModel.find({ ...query });
    res.status(200).send({ items });
  } catch (error) {
    errorResponse(res, error);
  }
};

const getJourneyForId = (req, res) => {};

const errorResponse = (res, error) => {
  res.status(500).send({ message: "Server internal error", error });
};

module.exports = {
  createJourney,
  getJourneys,
  getJourneyForId,
};
