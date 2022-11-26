import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listIssueDetails } from "../Redux/Action/IssueActions";

const SingleIssue = ({ match }) => {
  // const issueId = match.params.id;
  const { id }= useParams();
  const dispatch = useDispatch();

  const issueDetails = useSelector((state) => state.issueDetails)
  const {loading, error, issue} = issueDetails;

  useEffect(() => {
    dispatch(listIssueDetails(id));
  }, [dispatch, id])
  return (
    <>
      <Navbar />
      <div class="singleIssue">
        <div>{issue.name}</div>
        <div>{issue.title}</div>
        <div>
          <select>
            <option>Active</option>
            <option>Progress</option>
            <option>Done</option>
          </select>         
        </div>
      </div>
    </>

  );
}

export default SingleIssue;
