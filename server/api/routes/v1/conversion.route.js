const express = require("express");
const conversionController = require("../../controllers/conversion.controller");
const router = express.Router();

router.route("/check").post(conversionController.check);
router.route("/add").post(conversionController.add);
router.route("/sub").post(conversionController.sub);
router.route("/multiply").post(conversionController.multiply);
router.route("/divide").post(conversionController.divide);
router.route("/mod").post(conversionController.mod);
router.route("/opposite").post(conversionController.opposite);

module.exports = router;
