const express = require("express");
const {contactController} = require("../Controllers/contactController");
const router = express.Router();

router.post('/userContact',contactController);

module.exports= router;