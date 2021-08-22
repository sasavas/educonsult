import Pipeline from "../models/pipeline.js";

export const getPipeline = (req, res) => {
  Pipeline.find({}, (err, pipelines) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(pipelines);
    }
  });
};

export const getPipelineById = (req, res) => {
  Pipeline.findOne({ _id: req.params.id }, (err, pipeline) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(pipeline);
    }
  });
};

export const getPipelineByName = (req, res) => {
  Pipeline.findOne({ name: req.params.name }, (err, pipeline) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(pipeline);
    }
  });
};

export const postPipeline = (req, res) => {
  console.log("body", req.body);
  const pipeline = new Pipeline(req.body);
  pipeline.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send("saved successfully");
    }
  });
};

export const patchPipline = async (req, res) => {
  const filter = { _id: req.params.id };
  const update = req.body;

  Pipeline.findOneAndUpdate(filter, update, { new: true }, (err, pipeline) => {
    if (err) {
      res.status(500).send({ msg: err });
    } else {
      res.status(200).send(pipline);
    }
  });
};
