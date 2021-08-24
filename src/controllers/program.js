import Program from "../models/program.js";

export const getPrograms = (req, res) => {
  Program.find({})
    .populate("school")
    .exec((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(data);
      }
    });
};

export const getProgramById = (req, res) => {
  Program.findOne({ _id: req.params.id })
    .populate("school")
    .exec((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
};

export const postPrograms = (req, res) => {
  console.log(req.body);
  const program = new Program(req.body);
  program.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("could not be saved");
    } else {
      console.log("saved successfully");
      res.status(200).send("saved successfully");
    }
  });
};
