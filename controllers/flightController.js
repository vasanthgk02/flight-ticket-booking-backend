// flightController.js
const Flight = require("../models/Flight");

const searchFlights = async (req, res) => {
  try {
    const { date, time } = req.query;
    const flights = await Flight.find({ date, time });
    res.json({ success: true, flights });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const addFlight = async (req, res) => {
  try {
    const { flightNumber, date, time } = req.body;
    const flight = new Flight({ flightNumber, date, time });
    await flight.save();
    res.json({ success: true, message: "Flight added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const removeFlight = async (req, res) => {
  try {
    const { flightId } = req.params;
    await Flight.findByIdAndRemove(flightId);
    res.json({ success: true, message: "Flight removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  searchFlights,
  addFlight,
  removeFlight,
};
