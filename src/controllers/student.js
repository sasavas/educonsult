import Student from "../models/student.js";

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({})
      .populate({
        path: "registeredPrograms",
        populate: {
          path: "program",
          model: "Program",
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

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id })
      .populate({
        path: "registeredPrograms",
        populate: {
          path: "program",
          model: "Program",
          populate: {
            path: "school",
            model: "School",
          },
        },
      })
      .exec();
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
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

  // console.log({
  //   programId,
  //   studentId,
  //   pipeline,
  //   applicationDate,
  // });

  const student = await Student.findOne({ _id: studentId }).exec();

  const exists = student.registeredPrograms.some(
    (p) => p.program.toString() === programId
  );

  if (!exists) {
    const s = Student(student);
    s.registeredPrograms.push({
      program: programId,
      pipeline: pipeline,
      registeredAt: applicationDate,
    });
    s.save((err, saved) => {
      if (err) {
        console.log(err);
        res.status(500).send("could not register to this program.");
      } else {
        saved
          .populate({
            path: "registeredPrograms",
            populate: {
              path: "program",
              model: "Program",
              populate: {
                path: "school",
                model: "School",
              },
            },
          })
          .execPopulate()
          .then((populated) => {
            console.log("saved student:", populated);
            res.status(200).send(populated);
          });
      }
    });
  } else {
    console.log("already applied");
    res.status(400).send({ msg: "Already applied to this program." });
  }
};
