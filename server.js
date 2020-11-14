//Import packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Setup PORT
const PORT = process.env.PORT || 3000;

//Assign express() to app
const app = express();

//Setup Middlewares

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connect to mongodb
mongoose.connect("mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

//Setup Server
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
