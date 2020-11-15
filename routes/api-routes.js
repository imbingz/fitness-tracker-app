//Import express Router
const express = require("express");
const router = express.Router();
// Import model
const db = require("../models");

//Route for GET "/api/workouts/"
// router.get("/", getWorkouts);

router.get("/", async (req, res) => {
	try {
		const result = await db.Workout.find({});
		res.json(result);
	} catch (error) {
		console.log(error.message);
	}
});

//Route for POST "api/workouts/"
// router.post("/", createWorkout);

//Route for PUT "/api/workouts/workout_id"
// router.put("/:id", addExercise);

//Route for GET "/api/workouts/range"
// router.get("/range", getWorkoutInRange);

//Export router
module.exports = router;
