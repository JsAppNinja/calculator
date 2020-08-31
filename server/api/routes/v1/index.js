const express = require("express");
const calculationRoutes = require("./calculation.route");
const router = express.Router();

/**
 * API status
 */
router.get("/status", (req, res) => res.send("OK"));

/**
 * Conversions
 */
router.use("/operation", calculationRoutes);

module.exports = router;
