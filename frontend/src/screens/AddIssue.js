import React, { useState, useEffect }from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ISSUE_CREATE_RESET } from "../Redux/Constants/IssueConstants";
import { createIssue } from "../Redux/Action/IssueActions";
import Toast from "../components/LoadingError/Toast";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddIssue = () => {
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("")

  const dispatch = useDispatch()

  const issueCreate = useSelector((state) => state.issueCreate)
  const { loading, error, issue } = issueCreate

  useEffect(() => {
    if (issue) {
      toast.success("Issue Added", ToastObjects)
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
    <Toast/>
      <div>
        <form onSubmit={submitHandler}>
          <button type="submit">
            Sibmit
          </button>
          {error && "Error"}
          {loading && "Loading..."}
          <div>
            <label>Product Name</label>
            <input
              type="text"
              placeholder='Type Here'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Product Title</label>
            <input
              type="text"
              placeholder='Type Here'
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Product Status</label>
            <input
              type="text"
              placeholder='Type Here'
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddIssue;
