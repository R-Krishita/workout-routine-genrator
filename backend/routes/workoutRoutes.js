import express from "express";
import Workout from "../models/Workout.js";

const router = express.Router();

// Fetch workouts by type & difficulty
router.get("/", async (req, res) => {
  const { type, difficulty } = req.query;
  // console.log("Query parameters:", {type, difficulty});   debug log
  
  try {
    const workouts = await Workout.findOne({ type, difficulty }).limit(1);
    // console.log("Query result:", workouts);   debug log
    if (!workouts) return res.status(404).json({ message: "Workout not found" });
    
    res.json(workouts);
  } catch (error) {
    // console.error("Error fetching workouts:", error);    debug log
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
