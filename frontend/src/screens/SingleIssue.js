import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const SingleIssue = () => {
  const [issue, setIssue] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchissue = async () => {
      const { data } = await axios.get(`/api/issues/`+ id);
      setIssue(data);
    };
    fetchissue();
  }, []);
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
