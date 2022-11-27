import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { editIssue, updateIssue } from "../Redux/Action/IssueActions";
import { ISSUE_UPDATE_RESET } from "../Redux/Constants/IssueConstants";
import '../style/singleIssue.css';

const SingleIssue = () => {
  const { id }= useParams();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const issueEdit = useSelector((state) => state.issueEdit)
  const {issue} = issueEdit;

  const issueUpdate = useSelector((state) => state.issueUpdate);
  const {
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
        <div class="singleIssue__table">
          <form onSubmit={submitHanlder}>
            <div class="singleIssue__button">
              <Link style={{color:'white', textDecoration:'none'}} to="/">
                Go to Issues
              </Link>
            </div>

            <div class="viccx">
              Update Issue
            </div>
            <div>
              <div class="jwqml">
                <label class="vkcsx">
                  Issue name
                </label>
                <input
                  type="text"
                  placeholder="TypeHere"
                  class="gqhci"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="jwqml">
                <label class="vkcsx">
                  Issue title
                </label>
                <textarea
                  type="text"
                  placeholder="TypeHere"
                  class="gqhci"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="jwqml">
                <label class="vkcsx">
                  Issue status
                </label>
                <select 
                  type="text"
                  class="gqhci"
                  placeholder="Choose Here"
                  required
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Active</option>
                  <option>Progress</option>
                  <option>Done</option>
                </select>
              </div>
            </div>
            <div>
              <button class="yysbb" type="submit">
                Update now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  );
}

export default SingleIssue;
