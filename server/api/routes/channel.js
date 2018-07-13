const express = require("express");
const router = express.Router();

const ChannelController = require("../controllers/channel")

// Handle incoming GET requests
router.get("/", ChannelController.getChannels);

module.exports = router;