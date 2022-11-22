import express from 'express';
import Issue from './Models/IssueModel.js';
import issues from './data/Issues.js';

const ImportData = express.Router();

ImportData.post("/issue", async (req, res) => {
  await Issue.remove({});
  const importIssues = await Issue.insertMany(issues);
  res.send({ importIssues });
});

export default ImportData;