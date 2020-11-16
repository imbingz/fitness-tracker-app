const mongoose = require("mongoose");

module.exports = () => {
	//Connect to mongodb atlas
	mongoose
		.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		})
		.then(() => {
			console.log("mongodb cononected...");
		})
		.catch((error) => {
			console.log(error.message);
		});
};
