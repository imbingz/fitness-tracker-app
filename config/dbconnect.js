const mongoose = require("mongoose");

module.exports = () => {
	mongoose
		.connect("mongodb://localhost/workout", {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("mongodb cononected...");
		})
		.catch((error) => {
			console.log(error.message);
		});
};
