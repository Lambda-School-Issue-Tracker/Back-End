const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Import Model
const db = require("../users/users-model");

// Import JWT Info
const secrets = require("../config/secrets");

// End Point:
router.post("/register", validateRegisterBody, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.Password, 10);
  user.Password = hash;
  console.log(user);
  db.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({
        message: "Registration Failed, check with database administrator",
        error
      });
    });
});

router.post("/login", validateLogInBody, (req, res) => {
  let { Email, Password } = req.body;

  db.findBy({ Email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(Password, user.Password)) {
        const token = tokenGenerator(user);

        res.status(200).json({
          message: `Welcome ${user.First_Name} ${user.Last_Name}! We're happy to see you again!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      res.status(500).json({
        Message:
          "An error occured while trying to login. Please, check with the database administrator",
        err
      });
    });
});

// Middleware:
function tokenGenerator(user) {
  const payload = {
    Email: user.Email,
    Role: user.Role
  };
  console.log(payload.Role);
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

function validateRegisterBody(req, res, next) {
  let body = req.body;

  if (!body.Email || body.Email.length === 0 || /^\s*$/.test(body.Email)) {
    res.status(400).json({ message: "Please, enter your Email address" });
  } else if (
    !body.Password ||
    body.Password.length === 0 ||
    /^\s*$/.test(body.Password)
  ) {
    res.status(400).json({ message: "A password is required" });
  } else if (
    !body.First_Name ||
    body.First_Name.length === 0 ||
    /^\s*$/.test(body.First_Name)
  ) {
    res.status(400).json({ message: "Please, enter your first name" });
  } else if (
    !body.Last_Name ||
    body.Last_Name.length === 0 ||
    /^\s*$/.test(body.Last_Name)
  ) {
    res.status(400).json({ message: "Please, enter your last name" });
  } else if (!body.Role || body.Role.length === 0 || /^\s*$/.test(body.Role)) {
    res.status(400).json({ message: "A Role is required for new users" });
  } else {
    next();
  }
}

function validateLogInBody(req, res, next) {
  let body = req.body;

  if (!body.Email || body.Email.length === 0 || /^\s*$/.test(body.Email)) {
    res.status(400).json({ message: "Please, enter an Email" });
  } else if (
    !body.Password ||
    body.Password.length === 0 ||
    /^\s*$/.test(body.Password)
  ) {
    res.status(400).json({ message: "Please, enter your password" });
  } else {
    next();
  }
}

module.exports = router;
