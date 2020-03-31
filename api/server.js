const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//ROUTE IMPORTS:
const authRouter = require("../auth/auth-router");
const userRouter = require("../users/user-router");
const ticketRouter = require("../Tickets/ticket-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/tickets", ticketRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_DNV });
});

module.exports = server;
