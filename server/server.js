import express from "express";
import issues from "./data/Issues.js"

const app = express();

// LOAD ISSUES FROM SERVER
app.get("/api/issues", (req, res) => {
  res.json(issues);
});

// SINGLE ISSUE FROM SERVER
app.get("/api/issues/:id", (req, res) => {
  const issue = issues.find((p) => p._id === req.params.id);
  res.json(issue)
});

app.get("/", (req, res) => {
  res.send("API IS Running....")
});

app.listen(5000, console.log("Server Working..."));