const router = require("express").Router();

const db = require("./student-model");

const restricted = require("../auth/restricted-middleware");

// EndPoints: /api/students

// Get Students:
router.get("/", restricted, (req, res) => {
  db.find()
    .then(students => {
      res.status(200).json({ students });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry an error occured while trying to find Students. Please, check with your database administrator about this error",
        err
      });
    });
});

// Get Students by TL:
router.get("/byTL", restricted, (req, res) => {
  let filter = req.body;

  db.findBy(filter)
    .then(students => {
      res.status(200).json({ students });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `Sorry an error occured when trying to find students with the TL named ${filter}. Please, check with your database administrator about this error!`,
        err
      });
    });
});

// Post New Student:
router.post("/", restricted, validateStudentBody, (req, res) => {
  let student = req.body;

  db.add(student)
    .then(newStudent => {
      res.status(201).json({ newStudent });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry an error occured while trying to post your new student. Please, check with your database administrator about this error.",
        err
      });
    });
});

// Update Student:
router.put(
  "/:id",
  restricted,
  validateStudentBody,
  validateStudentId,
  (req, res) => {
    let id = req.params.id;
    let body = req.body;

    db.update(id, body)
      .then(changes => {
        res.status(202).json({ changes });
      })
      .catch(err => {
        res.status(500).json({
          errorMessage:
            "Sorry an error occured while trying to make changes to this student. Please, check with your database administrator about this error",
          err
        });
      });
  }
);

// Delete Student:
router.delete("/:id", restricted, validateStudentId, (req, res) => {
  let id = req.params.id;
  db.remove(id)
    .then(student => {
      res.status(200).json({ student });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry an error occured while trying to delete this student. Please, check with your database administrator about this error",
        err
      });
    });
});

// Middleware:

function validateStudentBody(req, res, next) {
  let body = req.body;

  if (
    !body.Full_Name ||
    body.Full_Name.length === 0 ||
    /^\s*$/.test(body.Full_Name)
  ) {
    res.status(400).json({ message: "Please, the students Full Name." });
  } else if (
    !body.Track ||
    body.Track.length === 0 ||
    /^\s*$/.test(body.Track)
  ) {
    res.status(400).json({ message: "Please, enter the students Track." });
  } else if (
    !body.Cohort ||
    body.Cohort.length === 0 ||
    /^\s*$/.test(body.Cohort)
  ) {
    res.status(400).json({ message: "Please enter this students Cohort." });
  } else if (
    !body.TL_Name ||
    body.TL_Name.length === 0 ||
    /^\s*$/.test(body.TL_Name)
  ) {
    res.status(400).json({ message: "Please, enter this student's TL name." });
  } else if (
    !body.SL1_Name ||
    body.SL1_Name.length === 0 ||
    /^\s*$/.test(body.SL1_Name)
  ) {
    res.status(400).json({ message: "Please, enter the students SL name." });
  } else if (
    !body.SL2_Name ||
    body.SL2_Name.length === 0 ||
    /^\s*$/.test(body.SL2_Name)
  ) {
    res.status(400).json({ message: "Please, enter this students SL name" });
  } else {
    console.log("Validation completed!");
    next();
  }
}

function validateStudentId(req, res, next) {
  let id = req.params.id;

  db.findById(id).then(item => {
    if (item) {
      next();
    } else {
      res.status(404).json({
        errorMessage: `Sorry, there isn't a student with the id of ${id}.`
      });
    }
  });
}

module.exports = router;
