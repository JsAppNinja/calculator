const express = require("express");
const calculationController = require("../../controllers/calculation.controller");
const router = express.Router();

router.route("/calculate").post(calculationController.calculation);

module.exports = router;
