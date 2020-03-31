const router = require("express").Router();

const db = require("./ticket-model");
const restricted = require("../auth/auth-router");

// Endpoints: /api/tickets

// Create New Ticket:
router.post("/", restricted, validateTicketBody, (req, res) => {
  let body = req.body;

  db.add(body)
    .then(newTicket => {
      res.status(201).json(newTicket);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Ticket creation failed. Please, report this error to your database administrator.",
        err
      });
    });
});

// Get all Tickets:

// Find Tickets by User_Id:

// Find Tickets by Cohort:

// Find Tickets by Track:

// Update Tickets

// Delete Tickets

// Middleware:

function validateUserId(req, res, next) {
  let id = req.params.id;

  db.findById(id).then(item => {
    if (item) {
      next();
    } else {
      res.status(404).json({
        errorMessage: `Sorry, there isn't a user with the id of ${id}.`
      });
    }
  });
}

function validateTicketBody(req, res, next) {
  let body = req.body;

  if (
    !body.Full_Name ||
    body.Full_Name.length === 0 ||
    /^\s*$/.test(body.Full_Name)
  ) {
    res.status(400).json({ message: "Please, the address parties Full Name." });
  } else if (!body.Role || body.Role.length === 0 || /^\s*$/.test(body.Role)) {
    res.status(400).json({ message: "Please, enter the adress parties Role." });
  } else if (
    !body.Track ||
    body.Track.length === 0 ||
    /^\s*$/.test(body.Track)
  ) {
    res
      .status(400)
      .json({ message: "Please, enter the adress parties Track." });
  } else if (
    !body.Cohort ||
    body.Cohort.length === 0 ||
    /^\s*$/.test(body.Cohort)
  ) {
    res
      .status(400)
      .json({ message: "Please, enter the adress parties Cohort." });
  } else if (
    !body.Triggering_Record ||
    body.Triggering_Record.length === 0 ||
    /^\s*$/.test(body.Triggering_Record)
  ) {
    res.status(400).json({ message: "Please, enter the adress parties Role." });
  } else if (
    !body.Reason ||
    body.Reason.length === 0 ||
    /^\s*$/.test(body.Reason)
  ) {
    res
      .status(400)
      .json({ message: "Please, enter a reason for this escalation." });
  } else if (
    !body.Triage ||
    body.Triage.length === 0 ||
    /^\s*$/.test(body.Triage)
  ) {
    res
      .status(400)
      .json({ message: "Please, enter a Triage status for this escalation." });
  } else {
    console.log("Validation completed!");
    next();
  }
}

module.exports = router;
