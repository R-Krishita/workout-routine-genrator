// import styles from "../styles/globals.css";
// import styles from "../styles/WorkoutForm.module.css";
const WorkoutCard = ({ workout }) => {
    if (!workout) return <p>No workout generated yet.</p>;
  
    return (
      <div style={styles.card}>
        <h2>{workout.type} Workout</h2>
        <p style = {styles.para}>Difficulty: {workout.difficulty}</p>
        <p style = {styles.para}>Duration: {workout.duration}</p>
        <span style = {styles.para}><strong>Recommended workouts</strong></span>
        <ul>
          {workout.exercises.map((exercise, index) => (
            <li style = {styles.list} key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  // Simple styles
  const styles = {
    card: {
      border: "1px solid white",
      padding: "25px",
      borderRadius: "10px",
      marginTop: "1vh",
      backgroundColor: "black",
      color: "white",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)", // Subtle white glow effect
    },
    para: {
      margin: "5px",
      padding: "5px",
    },
    list: {
      margin: "3px",
      padding: "3px",
    }
  };
  
  export default WorkoutCard;
  