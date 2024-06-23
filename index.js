const { Command } = require('commander');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./database');
const { seedStations, deleteStations } = require('./controllers/stationController');
const search = require('./routes/search');
const stations = require('./routes/stations'); 

const program = new Command();
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

connectDB();

program
  .command('seed')
  .description('Seed data into MongoDB')
  .action(async () => {
    await seedStations();
    mongoose.connection.close(); // Close connection after seeding
  });

program
  .command('delete')
  .description('Delete data from MongoDB')
  .action(async () => {
    await deleteStations();
    mongoose.connection.close(); // Close connection after deleting
  });

if (process.argv.includes('start-server')) {
  // Start the server if 'start-server' command is passed
  app.get('/', (req, res) => {
    res.send('Welcome to the Auction API');
  });

  app.use('/api', search);

  // Use the station routes
  app.use('/api', stations);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} else {
  // Parse CLI commands
  program.parse(process.argv);
}
