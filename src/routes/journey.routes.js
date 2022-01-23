const { Router } = require("express");

const journeyController = require("../controllers/journeys.controller");

const router = Router();

router.post("/", journeyController.getJourneys);
router.post("/", journeyController.createJourney);
router.get("/:id", journeyController.getJourneyForId);

module.exports = router;
