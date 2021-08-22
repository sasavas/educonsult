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

export const patchStudent = async (req, res) => {
  const filter = { _id: req.params.id };
  const update = req.body;

  Student.findOneAndUpdate(filter, update, { new: true }, (err, student) => {
    if (err) {
      res.status(500).send({ msg: err });
    } else {
      res.status(200).send(student);
    }
  });
};

export const registerProgram = async (req, res) => {
  const programId = req.params.programId;
  const studentId = req.params.id;

  const student = await Student.findOne({ _id: studentId }).exec();

  const exists = student.registeredPrograms.some(
    (p) => p.programId.toString() === programId
  );

  if (!exists) {
    const s = Student(student);
    s.registeredPrograms.push({ programId: programId });
    s.save();
    res.status(200).send(s);
  } else {
    res.status(400).send({ msg: "Already applied to this program." });
  }
};
