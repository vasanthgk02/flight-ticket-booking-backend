// flightRoutes.js
const express = require("express");
const flightController = require("../controllers/flightController");
const {
  authMiddleware,
  adminAuthMiddleware,
} = require("../utils/authMiddleware");

const router = express.Router();

router.get("/flights", authMiddleware, flightController.searchFlights);
router.post("/flights", adminAuthMiddleware, flightController.addFlight);
router.delete(
  "/flights/:flightId",
  adminAuthMiddleware,
  flightController.removeFlight
);

module.exports = router;
