import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FieldSchema = new Schema({
  school: { type: Schema.Types.ObjectId, ref: "School", required: true },
  fieldType: {
    type: String,
    enum: {
      values: ["bachelor", "master"],
      message: "bachelor or master, {VALUE} is not supported",
    },
  },
  fieldName: { type: String },
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
    examName: { type: String },
    minScore: { type: String },
  },
  websiteLink: { type: String },
  scholarshipLink: { type: String },
  notes: { type: String },
});

const Field = mongoose.model("Field", FieldSchema);

export default Field;
