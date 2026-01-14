const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let poll = {
  question: "Which domain is best?",
  options: {
    Web: 0,
    AI: 0,
    Blockchain: 0,
    Cybersecurity: 0
  }
};

// Get poll
app.get("/api/poll", (req, res) => {
  res.json(poll);
});

// Vote
app.post("/api/vote", (req, res) => {
  const { option } = req.body;
  if (!poll.options[option]) return res.status(400).send("Invalid option");
  poll.options[option]++;
  res.json(poll);
});

module.exports = app;
