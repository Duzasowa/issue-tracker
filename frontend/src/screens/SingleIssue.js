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
      <div className="container single-product">
        {issue.name}
        <div class="">
          {issue.title}
        </div>
      </div>
    </>

  );
}

export default SingleIssue;
