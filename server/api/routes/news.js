const express = require("express");
const router = express.Router();

const NewsController = require("../controllers/news")

// Handle incoming GET requests
router.get("/:id", NewsController.getNews);

module.exports = router;