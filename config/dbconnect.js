const mongoose = require("mongoose");

module.exports = () => { 

    mongoose.connect("mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

}