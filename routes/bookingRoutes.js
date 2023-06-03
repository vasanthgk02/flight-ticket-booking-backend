// bookingRoutes.js
const express = require("express");
const bookingController = require("../controllers/bookingController");
const {
  authMiddleware,
  adminAuthMiddleware,
} = require("../utils/authMiddleware");

const router = express.Router();

router.post("/bookings", authMiddleware, bookingController.bookFlight);
router.get("/bookings", authMiddleware, bookingController.getUserBookings);
router.get(
  "/bookings/flight",
  adminAuthMiddleware,
  bookingController.getBookingsByFlight
);

module.exports = router;
