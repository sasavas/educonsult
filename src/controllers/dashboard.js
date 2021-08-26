import Student from "../models/student.js";
import Program from "../models/program.js";
import School from "../models/school.js";

import async from "async";

export const getDashboardStatistics = async (req, res) => {
  // get all students, courses, programs...

  async.parallel(
    {
      studentCount: (callback) => {
        Student.countDocuments({}, callback);
      },
      programCount: (callback) => {
        Program.countDocuments({}, callback);
      },
      schoolCount: (callback) => {
        School.countDocuments({}, callback);
      },
    },
    (err, values) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(values);
      }
    }
  );
};
