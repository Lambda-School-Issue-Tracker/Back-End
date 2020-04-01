const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//ROUTE IMPORTS:
const authRouter = require("../auth/auth-router");
const userRouter = require("../users/user-router");
const ticketRouter = require("../Tickets/ticket-router");
const commentReplyRouter = require("../commentReplies/comment-replies");
const studentRouter = require("../Students/student-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/tickets", ticketRouter);
server.use("/api/comment", commentReplyRouter);
server.use("/api/students", studentRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_DNV });
});

module.exports = server;
