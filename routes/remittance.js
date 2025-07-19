const express = require("express");
const router = express.Router();
const remit = require("../controllers/remittanceController");

router.post("/", remit.simulateRemittance);

module.exports = router;