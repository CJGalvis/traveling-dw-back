const { Router } = require("express");

const reservationController = require("../controllers/reservations.controller");

const router = Router();

router.post("/", reservationController.createReservation);
router.post("/get", reservationController.getReservation);

module.exports = router;
