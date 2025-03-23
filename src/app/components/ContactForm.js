"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    ageGroup: "",
    preference: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.ageGroup || !formData.preference || !formData.message) {
      setResponseMsg("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setResponseMsg(errorData.message || "Failed to submit the form.");
        return;
      }

      const data = await response.json();
      setResponseMsg(data.message || "Form submitted successfully!");
      setFormData({ name: "", ageGroup: "", preference: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMsg("Error submitting form. Try again!");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={styles.input} />
        <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} required style={styles.input}>
          <option value="">Select Age Group</option>
          <option value="18-25">18-25</option>
          <option value="26-40">26-40</option>
          <option value="41+">41+</option>
        </select>
        <select name="preference" value={formData.preference} onChange={handleChange} required style={styles.input}>
          <option value="">Select Preference</option>
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
        </select>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={styles.textarea} />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {responseMsg && <p style={styles.response}>{responseMsg}</p>}
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
  },
  form: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    border: "none",
    background: "#222",
    color: "white",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease-in-out",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    border: "none",
    background: "#222",
    color: "white",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease-in-out",
    height: "120px",
    resize: "none",
  },
  button: {
    background: "#ffcc00",
    color: "black",
    fontWeight: "bold",
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    background: "#e6b800",
    transform: "scale(1.05)",
  },
  response: {
    marginTop: "10px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#00ff00",
  },
};

export default ContactForm;
