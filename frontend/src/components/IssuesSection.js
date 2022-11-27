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
                  <div>
                    <div className="shopBack">
                      <div alt={issue.name} />
                    </div>
                  </div>

                  <div className="IssuesSection__container-name">
                    <>
                      <div 
                        style={{color: 'black', textDecoration: 'none'}}
                      >
                        {issue.name}
                      </div>
                    </>
                  </div>
                  <div className="IssuesSection__container-title">
                    <>
                      <div 
                        style={{color: 'black', textDecoration: 'none'}}
                      >
                        {issue.title}
                      </div>
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
                  <Link to={`/issues/${issue._id}/edit`}>Edit</Link>
                  <a class="">Delete</a>
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
