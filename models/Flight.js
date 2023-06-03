// Flight.js
const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  seatsAvailable: {
    type: Number,
    default: 60,
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
