//Import path package
const path = require("path");

module.exports = function(app) {
	//index route loads index.html
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
		console.log(path.join(__dirname));
	});

	app.get("/exercise", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/exercise.html"));
	});

	app.get("/stats", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/stats.html"));
	});
};
