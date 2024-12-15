const Station = require("../models/station");

async function seedStations() {
  const data = [
    {
      name: "Z Kaiwharawhara",
      address: "24 Hutt Road, Kaiwharawhara, Wellington",
      hours: "Monday-Sunday 24/7",
      services: "Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms, EV Charging, Trailer Hire",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      position: { lat: -41.2588, lng: 174.7807 },
      station_type: "service station"
    },
    {
      name: "Z Karori",
      address: "98-100 Karori Road, Karori, Wellington",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, LPG SWAP'n'GO, Pay at pump, Bathrooms, Car Wash",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975,
      position: { lat: -41.2875, lng: 174.7456 },
      station_type: "service station"
    },
    {
      name: "Z Kingsland",
      address: "570 New North Road, Kingsland, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Z Espress Coffee & Fresh Food, Pay in app, Pay at pump, Bathrooms, EV Charging, Flybuys",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      position: { lat: -36.8779, lng: 174.7460 },
      station_type: "service station"
    },
    {
      name: "Z Lower Hutt",
      address: "17-21 Queens Drive, Lower Hutt, Wellington",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, EV Charging, LPG SWAP'n'GO",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      position: { lat: -41.2103, lng: 174.9055 },
      station_type: "service station"
    },
    {
      name: "Z Lynfield",
      address: "1098 Dominion Road, Lynfield, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975,
      position: { lat: -36.9136, lng: 174.7340 },
      station_type: "service station"
    },
    {
      name: "Z Mt Eden",
      address: "400 Dominion Road, Mt Eden, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      position: { lat: -36.8743, lng: 174.7596 },
      station_type: "service station"
    },
    {
      name: "Z Newmarket",
      address: "286 Broadway, Newmarket, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Trailer Hire",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      position: { lat: -36.8667, lng: 174.7780 },
      station_type: "service station"
    },
    {
      name: "Z Parnell",
      address: "153 Parnell Road, Parnell, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975,
      position: { lat: -36.8550, lng: 174.7825 },
      station_type: "service station"
    },
    {
      name: "Z Ponsonby",
      address: "28 College Hill, Ponsonby, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      position: { lat: -36.8509, lng: 174.7483 },
      station_type: "service station"
    },
    {
      name: "Z Quay Street",
      address: "108 Quay Street, Auckland CBD, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      position: { lat: -36.8441, lng: 174.7669 },
      station_type: "service station"
    },
    {
      name: "Z Riccarton Road",
      address: "88 Riccarton Road, Riccarton, Christchurch",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975,
      position: { lat: -43.5309, lng: 172.6078 },
      station_type: "service station"
    },
    {
      name: "Z Silverdale",
      address: "1 Hibiscus Coast Highway, Silverdale, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      position: { lat: -36.6133, lng: 174.6780 },
      station_type: "service station"
    },
    {
      name: "Z Takanini",
      address: "236 Great South Road, Takanini, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      position: { lat: -37.0488, lng: 174.9041 },
      station_type: "service station"
    },
    {
      name: "Z Thorndon Quay",
      address: "312 Thorndon Quay, Thorndon, Wellington",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      position: { lat: -41.2775, lng: 174.7772 },
      station_type: "service station"
    },
    {
      name: "Z Vivian Street",
      address: "203-205 Vivian Street, Wellington",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      position: { lat: -41.2953, lng: 174.7701 },
      station_type: "service station"
    },
    {
      name: "Z Wairau Valley",
      address: "154 Wairau Road, Wairau Valley, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975,
      position: { lat: -36.7685, lng: 174.7386 },
      station_type: "truck stop"
    },
    {
      name: "Z Warkworth",
      address: "67-69 Matakana Road, Warkworth",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      position: { lat: -36.3985, lng: 174.6634 },
      station_type: "truck stop"
    },
    {
      name: "Z Whangarei",
      address: "204 Bank Street, Whangarei",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975,
      position: { lat: -35.7213, lng: 174.3237 },
      station_type: "truck stop"
    },
    {
      name: "Z Willis Street",
      address: "71 Willis Street, Wellington",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      position: { lat: -41.2889, lng: 174.7737 },
      station_type: "truck stop"
    }
  ];
  await Station.insertMany(data);
  console.log('Station data seeded!');
}

async function deleteStations() {
  await Station.deleteMany({});
  console.log('Station data deleted!');
}

async function getStations(req, res) {
  try {
    const stations = await Station.find({});
    res.json(stations);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getStationById(req, res) {
  try {
    const { id } = req.params;
    const station = await Station.findById(id);
    if (!station) {
      return res.status(404).send("Station not found");
    }
    res.json(station);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
async function search(req, res) {
  console.log("Search API has been hit!");
  const { query } = req.query;

  if (!query) {
    return res.status(400).send('Query parameter is required');
  }

  try {
    const items = await Station.find({
      $or: [
        { name: new RegExp(query, 'i') },
        { address: new RegExp(query, 'i') },
        { services: new RegExp(query, 'i') }
      ]
    });

    res.json(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  seedStations,
  deleteStations,
  getStations,
  getStationById,
  search
};
