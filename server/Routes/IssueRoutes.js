import express from "express";
import asyncHandler from "express-async-handler";
import Issue from "../Models/IssueModel.js";

const IssueRoute = express.Router()

// GET ALL ISSUES
IssueRoute.get(
  "/", 
  asyncHandler (async(req, res) => {
    const issues = await Issue.find({});
    res.json(issues);
  })
);

// GET SINGLE ISSUE
IssueRoute.get(
  "/:id", 
  asyncHandler (async(req, res) => {
    const issue = await Issue.findById(req.params.id);
    if (issue) {
      res.json(issue);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

//UPDATE ISSUE
IssueRoute.put(
  "/:id", 
  asyncHandler (async(req, res) => {
    const { status } = req.body;
    const issue = await Issue.findById(req.params.id);
    if (issue) {
      issue.status = status;

      const updatedIssue = await issue.save();
      res.json(updatedIssue);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default IssueRoute;
