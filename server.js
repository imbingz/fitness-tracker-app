const dotenv = require("dotenv").config();
//Import packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Import api-routes
const apiRoute = require("./routes/api-routes");
const htmlRoute = require("./routes/html-routes");

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

//Connect to mongodb atlas and server
mongoose
	.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => {
		//Setup Server after connecting to db
		app.listen(PORT, () => {
			console.log(`listening on PORT ${PORT}, http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error.message);
	});
