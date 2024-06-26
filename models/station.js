const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  hours: { type: String, required: true },
  services: { type: String, required: true },
  ZX_Premium: { type: Number, required: true },
  Z91_Unleaded: { type: Number, required: true },
  Z_Diesel: { type: Number, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const Station = mongoose.model("Station", StationSchema);

module.exports = Station;
