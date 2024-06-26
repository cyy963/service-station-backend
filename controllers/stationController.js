const Station = require("../models/station");

async function seedStations() {
  const data = [
    {
      name: "Z Kaiwharawhara",
      address: "24 Hutt Road, Kaiwharawhara, Wellington",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      latitude: -41.273148,
      longitude: 174.768653,
    },
    {
      name: "Z Karori",
      address: "98-100 Karori Road, Karori, Wellington",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.67,
      Z91_Unleaded: 1.98,
      Z_Diesel: 1.975,
      latitude: -41.290099,
      longitude: 174.744501,
    },
    {
      name: "Z Kingsland",
      address: "570 New North Road, Kingsland, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      latitude: -36.872086,
      longitude: 174.74492,
    },
    {
      name: "Z Lower Hutt",
      address: "17-21 Queens Drive, Lower Hutt, Wellington",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      latitude: -41.212247,
      longitude: 174.909539,
    },
    {
      name: "Z Lynfield",
      address: "1098 Dominion Road, Lynfield, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.67,
      Z91_Unleaded: 1.98,
      Z_Diesel: 1.975,
      latitude: -36.918731,
      longitude: 174.724753,
    },
    {
      name: "Z Mt Eden",
      address: "400 Dominion Road, Mt Eden, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      latitude: -36.876297,
      longitude: 174.75436,
    },
    {
      name: "Z Newmarket",
      address: "286 Broadway, Newmarket, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      latitude: -36.866983,
      longitude: 174.777564,
    },
    {
      name: "Z Parnell",
      address: "153 Parnell Road, Parnell, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.67,
      Z91_Unleaded: 1.98,
      Z_Diesel: 1.975,
      latitude: -36.853467,
      longitude: 174.77642,
    },
    {
      name: "Z Ponsonby",
      address: "28 College Hill, Ponsonby, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      latitude: -36.848509,
      longitude: 174.747783,
    },
    {
      name: "Z Quay Street",
      address: "108 Quay Street, Auckland CBD, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      latitude: -36.846077,
      longitude: 174.769207,
    },
    {
      name: "Z Riccarton Road",
      address: "88 Riccarton Road, Riccarton, Christchurch",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.67,
      Z91_Unleaded: 1.98,
      Z_Diesel: 1.975,
      latitude: -43.530953,
      longitude: 172.608648,
    },
    {
      name: "Z Silverdale",
      address: "1 Hibiscus Coast Highway, Silverdale, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      latitude: -36.616717,
      longitude: 174.674441,
    },
    {
      name: "Z Takanini",
      address: "236 Great South Road, Takanini, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.67,
      Z91_Unleaded: 1.98,
      Z_Diesel: 1.975,
      latitude: -37.046907,
      longitude: 174.903168,
    },
    {
      name: "Z Thorndon Quay",
      address: "312 Thorndon Quay, Thorndon, Wellington",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      latitude: -41.274292,
      longitude: 174.778686,
    },
    {
      name: "Z Valley Road",
      address: "73 Valley Road, Mt Eden, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      latitude: -36.880425,
      longitude: 174.756992,
    },
    {
      name: "Z Vivian Street",
      address: "203-205 Vivian Street, Wellington",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      latitude: -41.293975,
      longitude: 174.77586,
    },
    {
      name: "Z Wairau Valley",
      address: "154 Wairau Road, Wairau Valley, Auckland",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.67,
      Z91_Unleaded: 1.98,
      Z_Diesel: 1.975,
      latitude: -36.775706,
      longitude: 174.73859,
    },
    {
      name: "Z Warkworth",
      address: "67-69 Matakana Road, Warkworth",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987,
      latitude: -36.402963,
      longitude: 174.662514,
    },
    {
      name: "Z Whangarei",
      address: "204 Bank Street, Whangarei",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.67,
      Z91_Unleaded: 1.98,
      Z_Diesel: 1.975,
      latitude: -35.725541,
      longitude: 174.323786,
    },
    {
      name: "Z Willis Street",
      address: "71 Willis Street, Wellington",
      hours: "24/7",
      services:
        "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995,
      latitude: -41.291083,
      longitude: 174.776907,
    },
  ];

  try {
    await Station.insertMany(data);
    console.log("Data seeded!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

async function deleteStations() {
  try {
    await Station.deleteMany({});
    console.log("Data deleted!");
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}

const getStations = async (req, res) => {
  try {
    const stations = await Station.find(
      {},
      "_id name address hours services ZX_Premium Z91_Unleaded Z_Diesel latitude longitude"
    );
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStationById = async (req, res) => {
  try {
    const station = await Station.findById(req.params.id);
    if (!station) {
      return res.status(404).json({ message: "Station not found" });
    }
    res.json(station);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// check if search function is defined 
const search = async (req, res) => {
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
