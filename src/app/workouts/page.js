"use client";
import { useState, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutCard from "../components/WorkoutCard";

const WorkoutPage = () => {
  const [generatedWorkout, setGeneratedWorkout] = useState(null);

  const handleGenerateWorkout = async ({ workoutType, difficulty }) => {
    try {
      const response = await fetch(`http://localhost:5000/api/workouts?type=${workoutType}&difficulty=${difficulty}`);
      const data = await response.json();
      
      if (response.ok) {
        setGeneratedWorkout(data);
      } else {
        setGeneratedWorkout(null);
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.heading}>Workout Generator</h1>
      <div style={styles.contentWrapper}>
        <WorkoutForm onGenerate={handleGenerateWorkout} />
        <WorkoutCard workout={generatedWorkout} />
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1vh",
    backgroundColor: "black",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "10px",
    textAlign: "center",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "black",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default WorkoutPage;
