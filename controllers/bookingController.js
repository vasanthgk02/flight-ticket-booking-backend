// bookingController.js
const Booking = require("../models/Booking");
const Flight = require("../models/Flight");

const bookFlight = async (req, res) => {
  try {
    const { userId, flightId, seatNumber } = req.body;
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res
        .status(404)
        .json({ success: false, message: "Flight not found" });
    }
    if (flight.seatsAvailable === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No seats available on this flight" });
    }
    const existingBooking = await Booking.findOne({ userId, flightId });
    if (existingBooking) {
      return res
        .status(400)
        .json({
          success: false,
          message: "You have already booked this flight",
        });
    }
    const booking = new Booking({ userId, flightId, seatNumber });
    await booking.save();
    flight.seatsAvailable--;
    await flight.save();
    res.json({ success: true, message: "Flight booked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const { userId } = req.user;
    const bookings = await Booking.find({ userId }).populate("flightId");
    res.json({ success: true, bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getBookingsByFlight = async (req, res) => {
  try {
    const { flightId } = req.query;
    const bookings = await Booking.find({ flightId }).populate("userId");
    res.json({ success: true, bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  bookFlight,
  getUserBookings,
  getBookingsByFlight,
};
