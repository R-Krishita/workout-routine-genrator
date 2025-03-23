"use client"; 
// import styles from "../styles/WorkoutForm.module.css";
import { useState } from "react";

const WorkoutForm = ({ onGenerate }) => {
  const [workoutType, setWorkoutType] = useState("Cardio");
  const [difficulty, setDifficulty] = useState("Beginner");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send selected values to parent component
    onGenerate({ workoutType, difficulty });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Workout Type:
        <select style = {styles.select} value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
        </select>
      </label>

      <label style={styles.label}>
        Difficulty:
        <select style = {styles.select} value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>

      <button type="submit" style={styles.button}>Generate Workout</button>
    </form>
  );
};

// Simple inline styles
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "20px",
    border: "1px solid white",
    borderRadius: "5px",
    width: "300px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "300px",
    background: "#222", // Dark theme
    color: "white",
    margin: "20px auto", // Centering
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
  },
  label: {
    fontSize: "large",
    marginBottom: "5px",
  },
  select: {
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    background: "#333",
    color: "white",
    cursor: "pointer",
    width: "100%",
    fontSize: "medium",
  },
  button: {
    background: "#ffcc00", // Highlight color
    color: "black",
    fontWeight: "bold",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    transition: "0.3s",
    fontSize: "large"
  },
  buttonHover: {
    background: "#e6b800",
  },
};

export default WorkoutForm;
