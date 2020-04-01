const router = require("express").Router();

const db = require("./ticket-model");
const userDB = require("../users/users-model");
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
router.get("/", restricted, (req, res) => {
  db.find()
    .then(tickets => {
      res.status(200).json({ tickets });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry an error occured while fetching tickets. Please, check with your database administrator about this error",
        err
      });
    });
});

// Find Tickets by User_Id:
router.get("/user/:id", restricted, validateUserId, (req, res) => {
  let id = req.params.id;

  db.findTicketsByUserId(id)
    .then(tickets => {
      res.status(200).json({ tickets });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry an error occured while trying to find your tickets. Please, report this error to your database adminstrator",
        err
      });
    });
});

// Find Tickets by Cohort:
router.get("/cohort", restricted, (req, res) => {
  let { Cohort } = req.body;

  db.findBy({ Cohort })
    .then(tickets => {
      res.status(200).json({ tickets });
    })
    .catch(err => {
      res.status(500).json(
        {
          errorMessage:
            "Sorry an error occurred when trying to find tickets by cohort. Please, report this error to your database administrator"
        },
        err
      );
    });
});

// Find Tickets by Track:
router.get("/track", restricted, (req, res) => {
  let { Track } = req.body;

  db.findBy({ Track })
    .then(tickets => {
      res.status(200).json({ tickets });
    })
    .catch(err => {
      res.status(500).json(
        {
          errorMessage:
            "Sorry an error occurred when trying to find tickets by cohort. Please, report this error to your database administrator"
        },
        err
      );
    });
});

// Update Tickets
router.put("/:id", restricted, validateTicketId, (req, res) => {
  let id = req.params.id;
  let body = req.body;

  db.update(id, body)
    .then(changes => {
      res.status(202).json({ changes });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry, something went wrong while trying to update your ticket. Please, check with your database administrator about this error.",
        err
      });
    });
});

// Delete Tickets
router.delete("/:id", restricted, validateTicketId, (req, res) => {
  let id = req.params.id;

  db.remove(id)
    .then(ticket => {
      res.status(200).json({ ticket });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry an error occured while trying to delete this ticket. Please, check with your database administrator about this error",
        err
      });
    });
});

// Middleware:

function validateTicketId(req, res, next) {
  let id = req.params.id;

  db.findById(id).then(item => {
    if (item) {
      next();
    } else {
      res.status(404).json({
        errorMessage: `Sorry, there isn't a ticket with the id of ${id}.`
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

function validateUserId(req, res, next) {
  let id = req.params.id;

  userDB.findById(id).then(item => {
    if (item) {
      next();
    } else {
      res.status(404).json({
        errorMessage: `Sorry, there isn't a user with the id of ${id}.`
      });
    }
  });
}

module.exports = router;
