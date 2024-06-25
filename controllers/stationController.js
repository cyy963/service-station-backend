const Station = require('../models/station');

async function seedStations() {
  const data = [
    {
      name: "Z Kaiwharawhara",
      address: "24 Hutt Road, Kaiwharawhara, Wellington",
      hours: "Monday-Sunday 24/7",
      services: "Z Espress Coffee & Fresh Food, LPG SWAP'n'GO, Pay at pump, Bathrooms, EV Charging, Trailer Hire",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995
    },
    {
      name: "Z Karori",
      address: "98-100 Karori Road, Karori, Wellington",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, LPG SWAP'n'GO, Pay at pump, Bathrooms, Car Wash",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975
    },
    {
      name: "Z Kingsland",
      address: "570 New North Road, Kingsland, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Z Espress Coffee & Fresh Food, Pay in app, Pay at pump, Bathrooms, EV Charging, Flybuys",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987
    },
    {
      name: "Z Lower Hutt",
      address: "17-21 Queens Drive, Lower Hutt, Wellington",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, EV Charging, LPG SWAP'n'GO",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995
    },
    {
      name: "Z Lynfield",
      address: "1098 Dominion Road, Lynfield, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975
    },
    {
      name: "Z Mt Eden",
      address: "400 Dominion Road, Mt Eden, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987
    },
    {
      name: "Z Newmarket",
      address: "286 Broadway, Newmarket, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Trailer Hire",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995
    },
    {
      name: "Z Parnell",
      address: "153 Parnell Road, Parnell, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975
    },
    {
      name: "Z Ponsonby",
      address: "28 College Hill, Ponsonby, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987
    },
    {
      name: "Z Quay Street",
      address: "108 Quay Street, Auckland CBD, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995
    },
    {
      name: "Z Riccarton Road",
      address: "88 Riccarton Road, Riccarton, Christchurch",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975
    },
    {
      name: "Z Silverdale",
      address: "1 Hibiscus Coast Highway, Silverdale, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987
    },
    {
      name: "Z Takanini",
      address: "236 Great South Road, Takanini, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975
    },
    {
      name: "Z Thorndon Quay",
      address: "312 Thorndon Quay, Thorndon, Wellington",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995
    },
    {
      name: "Z Valley Road",
      address: "73 Valley Road, Mt Eden, Auckland",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987
    },
    {
      name: "Z Vivian Street",
      address: "203-205 Vivian Street, Wellington",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.675,
      Z91_Unleaded: 1.985,
      Z_Diesel: 1.995
    },
    {
      name: "Z Wairau Valley",
      address: "154 Wairau Road, Wairau Valley, Auckland",
      hours: "Monday-Sunday 24/7",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, EV Charging",
      ZX_Premium: 2.670,
      Z91_Unleaded: 1.980,
      Z_Diesel: 1.975
    },
    {
      name: "Z Warkworth",
      address: "67-69 Matakana Road, Warkworth",
      hours: "Monday-Sunday 6:00am - 10:00pm",
      services: "Pre-order Coffee, Pay in app, Z Espress Coffee & Fresh Food, Pay at pump, Bathrooms, LPG SWAP'n'GO, Flybuys",
      ZX_Premium: 2.669,
      Z91_Unleaded: 1.982,
      Z_Diesel: 1.987
    }
  ];
  await Station.insertMany(data);
  console.log('Station data seeded!');
}

async function deleteStations() {
  await Station.deleteMany({});
  console.log('Station data deleted!');
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
}

const getStations = async (req, res) => {
  try {
    const stations = await Station.find(); // Adjust query based on your requirements
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  seedStations,
  deleteStations,
  search,
  getStations
};
