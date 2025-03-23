import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();
router.post("/", async (req, res) => {
  const { name, ageGroup, preference, message } = req.body;
  console.log("Received data:", req.body);              //debug log
  
  try {
    const newContact = new Contact({ name, ageGroup, preference, message });
    await newContact.save();
    
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;