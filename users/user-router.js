const router = require("express").Router();

const db = require("./users-model");
const bcrypt = require("bcryptjs");
const restricted = require("../auth/restricted-middleware");

// Endpoints: /api/users

// find User by Id:
router.get("/:id", restricted, validateId, (req, res) => {
  let id = req.params.id;

  db.findById(id)
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry, an error occured while processing your request. Please, check with your database administrator",
        err
      });
    });
});

// Update Account details:
router.put("/:id/update", restricted, validateId, (req, res) => {
  let body = req.body;
  let password = req.body.Password;
  let id = req.params.id;

  const hash = bcrypt.hashSync(password, 10);
  body.Password = hash;

  db.update(id, body)
    .then(changes => {
      res.status(200).json({ changes });
    })
    .catch(err => {
      res.status(400).json({
        errorMessage:
          "Sorry, an error occured while trying to update your information. Please, report this error to your admin administrator",
        err
      });
    });
});

// Delete User Account:
router.delete("/delete/:id", restricted, validateId, (req, res) => {
  let id = req.params.id;

  db.remove(id)
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Sorry there was an error while trying to delete this account. Please, report this error to your database adminstrator.",
        err
      });
    });
});

// Middeleware:

function validateId(req, res, next) {
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

module.exports = router;
