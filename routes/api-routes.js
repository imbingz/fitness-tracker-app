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
		res.status(500).send(error);
	}
});

//Route for POST "api/workouts/"
// router.post("/", createWorkout);
router.post("/", async ({ body }, res) => {
	try {
		const result = await db.Workout.create(body);
		res.json(result);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Route for PUT "/api/workouts/workout_id"
// router.put("/:id", addExercise);
router.put("/:id", async (req, res) => {
	try {
		const result = await db.Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.json(result);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Route for GET "/api/workouts/range"
// router.get("/range", getWorkoutInRange);

//Export router
module.exports = router;
