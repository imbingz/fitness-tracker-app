//Import packages
const express = require("express");
const logger = require("morgan");
//Connect to mongodb
require("./config/dbconnect");

//Setup PORT
const PORT = process.env.PORT || 3000;

//Assign express() to app
const app = express();

//Setup Middlewares

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Setup Server
app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}, http://localhost:${PORT}`);
});
