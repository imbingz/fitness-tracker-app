//Import path package
const path = require("path");
//Import express Router
const express = require("express");
const router = express.Router();

router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/html.html"));
});

module.exports = router;
