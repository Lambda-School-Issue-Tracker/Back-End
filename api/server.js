const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//ROUTE IMPORTS:
const authRouter = require("../auth/auth-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_DNV });
});

module.exports = server;
