import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
  name: String,
  city: String,
});

const University = mongoose.model("University", UniversitySchema);

export default University;
