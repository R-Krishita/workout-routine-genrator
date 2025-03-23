export default function Home() {
  return (
    <div className="main-container">
      <div className="content">
        {/* Left Section: Preferences */}
        <div className="preferences">
          <h1>Preference Selection</h1>
          <label> Cardio ✅</label>
          <label> Strength ✅</label>
          <label> Flexibility ✅</label>
          <button className="generate-btn">
            <a href="/workouts">Generate Your Workout Plan</a>
          </button>
        </div>
      </div> 
      <p className="footer-text">
        Get a custom workout plan based on your preferences: <strong>Cardio, Strength, Flexibility</strong>.
      </p>
    </div>
  );
}
