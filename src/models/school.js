import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  country: {
    type: String,
    trim: true,
    minLength: 3,
    maxLength: 60,
    required: true,
  },
  city: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 60,
    required: true,
  },
  name: { type: String, trim: true, minLength: 4, required: true },
  schoolType: {
    type: String,
    enum: {
      values: ["public", "private"],
      message: "public | private, {VALUE} is not supported",
    },
    required: true,
  },
});

const School = mongoose.model("School", SchoolSchema);

export default School;
