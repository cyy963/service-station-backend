#!/usr/bin/env node

const { Command } = require('commander');
const mongoose = require('mongoose');
const connectDB = require('../database');
const { seedStations, deleteStations } = require('../controllers/stationController');

const program = new Command();

async function main() {
  await connectDB();

  program
    .command('seed')
    .description('Seed station data into MongoDB')
    .action(async () => {
      await seedStations();
      mongoose.connection.close();
    });

  program
    .command('delete')
    .description('Delete station data from MongoDB')
    .action(async () => {
      await deleteStations();
      mongoose.connection.close();
    });

  program.parse(process.argv);
}

main();
