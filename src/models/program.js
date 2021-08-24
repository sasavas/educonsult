import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
  school: { type: Schema.Types.ObjectId, ref: "School", required: true },
  programType: {
    type: String,
    enum: {
      values: ["bachelor", "master"],
      message: "bachelor or master, {VALUE} is not supported",
    },
    required: true,
  },
  programName: { type: String, required: true },
  vacancies: { type: Number },
  fee: { type: Number },
  languge: { type: String },

  applicationDates: {
    beginDate: { type: Date },
    endDate: { type: Date },
  },

  languageRequirement: {
    language: { type: String },
    certificateName: { type: String },
    minScore: { type: String },
  },
  examRequirement: {
    type: new Schema({
      examName: { type: String },
      minScore: { type: String },
    }),
    required: true,
  },
  requiredDocuments: { type: [String], required: true },
  websiteLink: { type: String },
  scholarshipLink: { type: String },
  notes: { type: String },
});

const Program = mongoose.model("Program", ProgramSchema);

export default Program;
