import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  ageGroup: String,
  preference: String,
  message: String
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
