import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PipelineSchema = new Schema({
  name: { type: String, required: true, unique: true },
  steps: [
    mongoose.Schema({
      title: { type: String },
      text: { type: String, required: true },
      description: { type: String },
      status: {
        type: String,
        enum: {
          values: ["todo", "inProgress", "done"],
          message:
            "{VALUE} is not defined, please choose 'todo', 'inProgress' or 'done'",
        },
        default: "todo",
      },
    }),
  ],
});

export { PipelineSchema };

const Pipeline = mongoose.model("Pipeline", PipelineSchema);

export default Pipeline;
