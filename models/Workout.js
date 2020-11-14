//Import mongoose package and get Sechema
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Setup Workout schema

const WorkoutSchema = new Schema({
	day: {
		type: Number,
		required: true,
	},

	exercises: [
		{
			type: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				trim: true,
				required: true,
			},
			duration: {
				type: Number,
				trim: true,
			},
			weight: {
				type: Number,
				trim: true,
			},
			reps: {
				type: Number,
				trim: true,
			},
			sets: {
				type: Number,
				trim: true,
			},
			distance: {
				type: Number,
				trim: true,
			},
		},
	],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
