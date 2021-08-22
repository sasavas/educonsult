import School from "../models/school.js";

export const getSchools = (req, res) => {
  res.status(200).send({ school: "Sapienza" });
};

export const postSchool = (req, res) => {
  console.log(req.body);
  const school = new School(req.body);
  school.save((err) => {
    if (err) {
      const errMsg = "error occured while saving";
      console.log(err);
      res.status(500).send(errMsg);
    } else {
      const savedMsg = "school saved successfully";
      console.log(savedMsg);
      res.status(200).send(savedMsg);
    }
  });
};
