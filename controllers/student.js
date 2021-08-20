import Student from "../models/student.js";

export const getStudents = (req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(students);
    }
  });
};

export const getStudentById = (req, res) => {
  Student.find({ _id: req.params.id }, (err, student) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(student);
    }
  });
};

export const postStudents = (req, res) => {
  console.log("body", req.body);
  const student = new Student(req.body);
  student.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("could not be saved");
    } else {
      res.status(200).send("saved successfully");
    }
  });
};

export const updateStudent = async (req, res) => {
  const programId = req.body.programId;

  const filter = { _id: req.params.id };
  const update = {
    $addToSet: { registeredPrograms: [{ programId: programId }] },
  };
  try {
    const student = await Student.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};
