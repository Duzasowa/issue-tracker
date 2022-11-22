import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/IssuesSection.css";

const IssuesSection = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchissues = async () => {
      const {data} = await axios.get("/api/issues");
      setIssues(data);
    };
    fetchissues();
  }, []);
  return (
    <>
      <div className="IssuesSection">
        {issues.map((issue) => (
          <div
            className="IssuesSection__container"
            key={issue._id}
          >
            <div className="IssuesSection__container-2">
              <Link to={`/issues/${issue._id}`}>
                <div className="shopBack">
                  <div alt={issue.name} />
                </div>
              </Link>

              <div className="IssuesSection__container-name">
                <>
                  <Link 
                    style={{color: 'black', textDecoration: 'none'}}
                    to={`/issues/${issue._id}`}
                  >
                    {issue.name}
                  </Link>
                </>
              </div>
              <div className="IssuesSection__container-title">
                <>
                  <Link 
                    style={{color: 'black', textDecoration: 'none'}}
                    to={`/issues/${issue._id}`}
                  >
                    {issue.title}
                  </Link>
                </>
              </div>
              <div className="IssuesSection__container-status">
                <>
                  Active
                </>
              </div>
              <div className="IssuesSection__container-id">
                <>
                  {issue._id}
                </>
              </div>
              <div className="IssuesSection__container-lastModified">
                <>
                  Nov 20.04.2022 19:43:32
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default IssuesSection;
