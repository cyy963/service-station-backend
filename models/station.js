const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema({
  name: String,
  address: String,
  hours: String,
  services: String,
  ZX_Premium: Number,
  Z91_Unleaded: Number,
  Z_Diesel: Number,
  position: {
    lat: Number,
    lng: Number
  },
  station_type: String
});

const Station = mongoose.model("Station", StationSchema);

module.exports = Station;
