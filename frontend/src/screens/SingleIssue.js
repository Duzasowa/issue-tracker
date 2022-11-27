import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { editIssue, listIssueDetails, updateIssue } from "../Redux/Action/IssueActions";
import { ISSUE_UPDATE_RESET } from "../Redux/Constants/IssueConstants";

const SingleIssue = () => {
  const { id }= useParams();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const issueEdit = useSelector((state) => state.issueEdit)
  const {loading, error, issue} = issueEdit;

  const issueUpdate = useSelector((state) => state.issueUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = issueUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({type: ISSUE_UPDATE_RESET});
    } else {
      if (!issue.name || issue._id !== id) {
        dispatch(editIssue(id));
      }
      else {
        setName(issue.name);
        setTitle(issue.title);
        setStatus(issue.status);
      }
    }
  }, [issue, dispatch, id, successUpdate]);
  
  const submitHanlder = (e) => {
    e.preventDefault();
    dispatch(updateIssue({
      _id: id,
      name,
      title,
      status,
    }))
  }

  return (
    <>
      <Navbar />
      <div class="singleIssue">
        <form onSubmit={submitHanlder}>
          <Link to="/">
            Go to Issues
          </Link>
          <h2>Update Issue</h2>
          <div>
            <button type="submit">
              Update now
            </button>
          </div>
          <div>
            <div>
              <label>
                Issue name
              </label>
              <input
                type="text"
                placeholder="TypeHere"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>
                Issue title
              </label>
              <input
                type="text"
                placeholder="TypeHere"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>
                Issue status
              </label>
              <input
                type="text"
                placeholder="TypeHere"
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </>

  );
}

export default SingleIssue;
