import Field from "../models/field.js";

export const getFields = (req, res) => {
  Field.find({})
    .populate("school")
    .exec((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(data);
      }
    });
};

export const postFields = (req, res) => {
  console.log(req.body);
  const field = new Field(req.body);
  field.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("could not be saved");
    } else {
      console.log("saved successfully");
      res.status(200).send("saved successfully");
    }
  });
};
