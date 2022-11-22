import express from "express";
import asyncHandler from "express-async-handler";
import Issue from "../Models/IssueModel.js";

const issueRoute = express.Router()

// GET ALL ISSUES
issueRoute.get(
  "/", 
  asyncHandler (async(req, res) => {
    const issues = await Issue.find({});
    res.json(issues);
  })
);

// GET SINGLE ISSUE
issueRoute.get(
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

export default issueRoute;
