import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { listIssue } from '../Redux/Action/IssueActions';
import { Link } from "react-router-dom";
import "../style/IssuesSection.css";

const IssuesSection = () => {
  const dispatch = useDispatch();

  const issueList = useSelector((state) => state.issueList)
  const {loading, error, issues} = issueList

  useEffect(() => {
    dispatch(listIssue());
  }, [dispatch]);
  return (
    <>
      <div className="IssuesSection">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error : {error}</p>
        ) : (
          <>
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
                      <select>
                        <option>{issue.status}</option>
                        <option>Progress</option>
                        <option>Done</option>
                      </select>
                      
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
          </>
        )}
      </div>
    </>
  );
}

export default IssuesSection;
