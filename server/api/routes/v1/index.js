const express = require('express');
const conversionRoutes = require('./conversion.route')
const router = express.Router();

/**
 * API status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * Conversions
 */
router.use("/conversion", conversionRoutes);

module.exports = router;
