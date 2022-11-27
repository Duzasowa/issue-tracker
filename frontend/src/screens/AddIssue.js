import React, { useState, useEffect }from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ISSUE_CREATE_RESET } from "../Redux/Constants/IssueConstants";
import { createIssue } from "../Redux/Action/IssueActions";
import Navbar from "../components/Navbar";
import '../style/AddIssue.css';


const AddIssue = () => {
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("")

  const dispatch = useDispatch()

  const issueCreate = useSelector((state) => state.issueCreate)
  const { loading, error, issue } = issueCreate

  useEffect(() => {
    if (issue) {
      dispatch({type:ISSUE_CREATE_RESET})
      setName("")
      setTitle("")
      setStatus("")
    }
  }, [issue, dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createIssue(name, title, status))
  }

  return (
    <>
    <Navbar />
      <div class="addissue">
        <div class="addissue__container">
          <form onSubmit={submitHandler}>
            <div class="yykha">Adds a new Issue</div>
            {error && "Error"}
            {loading && "Loading..."}
            <div class="vmbbn">
              <label class="owzju">Issue Name</label>
              <input
                type="text"
                class="inqsf"
                placeholder='Type Here'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="vmbbn">
              <label class="owzju">Issue Title</label>
              <input
                type="text"
                class="inqsf"
                placeholder='Type Here'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="vmbbn">
              <label class="owzju">Issue Status</label>
              <select
                type="text" 
                class="inqsf"
                placeholder='Type Here'
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option></option>
                <option>Active</option>
                <option>Progress</option>
                <option>Done</option>
              </select>
            </div>
            <button type="submit">
              Sibmit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddIssue;
