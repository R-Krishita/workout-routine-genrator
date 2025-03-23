import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import workoutRoutes from "../routes/workoutRoutes.js"; 
import contactRoutes from "../routes/contactRoutes.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("DB Connection Error:", err));

// Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
