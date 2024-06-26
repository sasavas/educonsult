import mongoose from "mongoose";
import { PipelineSchema } from "./pipeline.js";

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  firstName: { type: String, minLength: 2, maxLength: 30, required: true },
  lastName: { type: String, minLength: 2, maxLength: 30, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  university: { type: String, required: true },
  targetProgram: {
    programType: {
      type: String,
      enum: {
        values: ["Lisans", "Yüksek Lisans"],
        message: "Choose Lisans or Yüksek Lisans, {VALUE} is not supported",
      },
    },
    program: {
      type: String,
    },
  },
  registeredPrograms: [
    mongoose.Schema({
      program: {
        type: Schema.Types.ObjectId,
        ref: "Program",
        required: true,
        unique: true,
      },
      registeredAt: { type: Date, default: Date.now },
      _id: false,
      pipeline: {
        type: PipelineSchema,
        required: true,
      },
    }),
  ],
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;
