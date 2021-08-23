import Student from "../models/student.js";

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({})
      .populate({
        path: "registeredPrograms",
        populate: {
          path: "programId",
          model: "Field",
          populate: {
            path: "school",
            model: "School",
          },
        },
      })
      .exec();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
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
  const pipeline = req.body.pipeline;
  const applicationDate = req.body.applicationDate;

  console.log("studentId", studentId);

  const student = await Student.findOne({ _id: studentId }).exec();

  const exists = student.registeredPrograms.some(
    (p) => p.programId.toString() === programId
  );

  if (!exists) {
    const s = Student(student);
    s.registeredPrograms.push({
      programId: programId,
      pipeline: pipeline,
      registeredAt: applicationDate,
    });
    s.save((err, saved) => {
      if (err) {
        res.status(500).send("could not register to this program.");
      } else {
        console.log(saved);
        res.status(200).send(saved);
      }
    });
  } else {
    res.status(400).send({ msg: "Already applied to this program." });
  }
};
