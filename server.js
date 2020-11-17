const dotenv = require("dotenv").config();
//Import packages
const express = require("express");
const logger = require("morgan");

//Import api-routes
const apiRoute = require("./routes/api-routes");
const htmlRoute = require("./routes/html-routes");

//Connect to mongodb
require("./config/dbconnect")();

//Setup PORT
const PORT = process.env.PORT || 3000;

//Assign express() to app
const app = express();

//Setup Middlewares
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Setup routes handler
app.use("/api/workouts", apiRoute);
app.use("/", htmlRoute);

//Setup Server
app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}, http://localhost:${PORT}`);
});
