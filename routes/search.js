const express = require('express');
const { search } = require('../controllers/stationController');

const router = express.Router();

router.get('/search', search );

module.exports = router;
