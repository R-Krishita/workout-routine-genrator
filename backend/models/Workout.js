import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  type: String,
  difficulty: String,
  exercises: [String],
});

const Workout = mongoose.model("Workout", workoutSchema);
export default Workout;
