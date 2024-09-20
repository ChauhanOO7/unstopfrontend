const express = require('express');
const { addApparel, getAllApparel } = require('../controllers/apparelController');

const router = express.Router();

// Route to add apparel
router.post('/submit', addApparel);

// Route to get all apparels
router.get('/all', getAllApparel);

module.exports = router;
