const router = require("express").Router();

const db = require("./commentReplies-model");
const ticketDb = require("../Tickets/ticket-model");
const restricted = require("../auth/auth-router");

// Endpoints: /api/tickets

// Create New Comment Reply:
router.post("/", restricted, validateCommentReplyBody, (req, res) => {
  let body = req.body;

  db.add(body)
    .then(reply => {
      res.status(201).json(reply);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Reply creation failed. Please, report this error to your database administrator.",
        err
      });
    });
});

// get reply by id:
router.get("/:id", validateCommentReplyId, (req, res) => {
  let id = req.params.id;

  db.findById(id)
    .then(ticket => {
      res.status(200).json({ ticket });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry, but an error occured when trying to find that commentReply. Please, report this error to your database administrator.",
        err
      });
    });
});

// Find Replies by Ticket_Id:
router.get("/ticket/:id", restricted, validateTicketId, (req, res) => {
  let id = req.params.id;

  db.findRepliesByTicketId(id)
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

// Update Comment Reply
router.put(
  "/:id",
  restricted,
  validateCommentReplyId,
  validateCommentReplyBody,
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
            "Sorry, something went wrong while trying to update your reply. Please, check with your database administrator about this error.",
          err
        });
      });
  }
);

// Delete Comment Reply
router.delete("/:id", restricted, validateTicketId, (req, res) => {
  let id = req.params.id;

  db.remove(id)
    .then(reply => {
      res.status(200).json({ reply });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry an error occured while trying to delete this reply. Please, check with your database administrator about this error",
        err
      });
    });
});

// Middleware:

function validateCommentReplyId(req, res, next) {
  let id = req.params.id;

  db.findById(id).then(item => {
    if (item) {
      next();
    } else {
      res.status(404).json({
        errorMessage: `Sorry, there isn't a comment reply with the id of ${id}.`
      });
    }
  });
}

function validateCommentReplyBody(req, res, next) {
  let body = req.body;

  if (
    !body.Comment_Reply_Body ||
    body.Comment_Reply_Body.length === 0 ||
    /^\s*$/.test(body.Comment_Reply_Body)
  ) {
    res
      .status(400)
      .json({ message: "Please, enter a reply before submitting." });
  } else {
    console.log("Validation completed!");
    next();
  }
}

function validateTicketId(req, res, next) {
  let id = req.params.id;

  ticketDb.findById(id).then(item => {
    if (item) {
      next();
    } else {
      res.status(404).json({
        errorMessage: `Sorry, there isn't a ticket with the id of ${id}.`
      });
    }
  });
}

module.exports = router;
