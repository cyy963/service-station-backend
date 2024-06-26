const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const search = require('./routes/search');
const stations = require('./routes/stations'); 

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('Welcome to the Auction API');
});

app.use('/api', search);

app.use('/api', stations);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

