import express from "express";
import issues from "./data/Issues.js";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";

dotenv.config();
connectDatabase();
const app = express();

// LOAD ISSUES FROM SERVER
app.get("/api/issues", (req, res) => {
  res.json(issues);
});

// SINGLE ISSUE FROM SERVER
app.get("/api/issues/:id", (req, res) => {
  const issue = issues.find((p) => p._id === req.params.id);
  res.json(issue);
});

app.get("/", (req, res) => {
  res.send("API IS Running....")
});

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server start in port ${PORT}`));