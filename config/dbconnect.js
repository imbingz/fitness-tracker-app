const mongoose = require("mongoose");

module.exports = () => {
	//Connect to mongodb atlas
	mongoose
		.connect(process.env.MONGODB_URI, {
			dbName: process.env.DB_NAME,
			user: process.env.DB_USER,
			pass: process.env.DB_PASS,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		})
		.then(() => {
			console.log("mongodb cononected...");
		})
		.catch((error) => {
			console.log(error.message);
		});
};
