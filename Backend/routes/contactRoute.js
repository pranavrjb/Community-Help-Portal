const express = require("express");
const {contactController} = require("../Controllers/contactController");
const router = express.Router();

router.post('/contact',contactController);

module.exports= router;