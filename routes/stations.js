const express = require("express");
const {
  getStations,
  getStationById,
} = require("../controllers/stationController");

const router = express.Router();

router.get("/stations", getStations); // Route to get all stations
router.get("/stations/:id", getStationById); // Route to get a station by ID

module.exports = router;
