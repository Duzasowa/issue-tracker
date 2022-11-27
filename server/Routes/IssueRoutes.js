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

//CREATE ISSUE
IssueRoute.post(
  "/",
  asyncHandler(async (req, res) => {
    const {name, title, status} = req.body
    const issueExist = await Issue.findOne({name})
    if (issueExist) {
      res.status(400);
      throw new Error("Issue name already exist");
    } else {
      const issue = new Issue({
        name,title,status
      });
      if(issue) {
        const createdissue = await issue.save()
        res.status(201).json(createdissue)
      }
      else {
        res.status(400);
        throw new Error("Invalid issue data")
      }
    }
  })
);

//EDIT ISSUE
IssueRoute.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const {name, title, status} = req.body
    const issue = await Issue.findById(req.params.id);
    if (issue) {
      issue.name = name || issue.name;
      issue.title = title || issue.title;
      issue.status = status || issue.status;

      const updatedIssue = await issue.save();
      res.json(updatedIssue);
    } else {
      res.status(404);
      throw new Error("Issue not found")
    }
  })
);

// DELETE ISSUE
IssueRoute.delete(
  "/:id", 
  asyncHandler (async (req, res) => {
    const issue = await Issue.findById(req.params.id);
    if (issue) {
      await issue.remove();
      res.json({ message: "Issue deleted "});
    } else {
      res.status(404);
      throw new Error("Issue not Found");
    }
  })
);

export default IssueRoute;
