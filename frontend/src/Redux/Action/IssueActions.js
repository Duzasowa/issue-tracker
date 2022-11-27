import axios from "axios";
import { ISSUE_CREATE_FAIL, ISSUE_CREATE_REQUEST, ISSUE_CREATE_SUCCESS, ISSUE_DETAILS_FAIL, ISSUE_DETAILS_REQUEST, ISSUE_DETAILS_SUCCESS, ISSUE_EDIT_FAIL, ISSUE_EDIT_REQUEST, ISSUE_EDIT_SUCCESS, ISSUE_LIST_FAIL, ISSUE_LIST_REQUEST, ISSUE_LIST_SUCCESS, ISSUE_UPDATE_FAIL, ISSUE_UPDATE_REQUEST, ISSUE_UPDATE_SUCCESS } from "../Constants/IssueConstants";


// ISSUE LIST
export const listIssue = () => async(dispatch) => {
  try {
    dispatch({type:ISSUE_LIST_REQUEST});
    const {data} = await axios.get("/api/issues");
    dispatch({ type: ISSUE_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: ISSUE_LIST_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}

// ISSUE DETAILS
export const listIssueDetails = (id) => async(dispatch) => {
  try {
    dispatch({type:ISSUE_DETAILS_REQUEST});
    const {data} = await axios.get(`/api/issues/${id}`);
    dispatch({ type: ISSUE_DETAILS_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: ISSUE_DETAILS_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}

// ISSUE CREATE 
export const createIssue = (name, title, status) => async(dispatch) => {
  try {
    dispatch({type: ISSUE_CREATE_REQUEST});

    const {data} = await axios.post(
      `/api/issues/`,
      {
        name,
        title,
        status
      }
    );
    dispatch({ type: ISSUE_CREATE_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: ISSUE_CREATE_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}

// EDIT ISSUE
export const editIssue = (id) => async (dispatch) => {
  try {
    dispatch({ type: ISSUE_EDIT_REQUEST });
    const { data } = await axios.get(`/api/issues/${id}`);
    dispatch({ type: ISSUE_EDIT_SUCCESS , payload: data });
  } catch (error) {
    const message = 
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch ({
      type: ISSUE_EDIT_FAIL,
      payload: message,
    });
  } 
};

// ISSUE UPDATE
export const updateIssue = 
  (issue) => 
  async(dispatch, getState) => {
  try {
    dispatch({type: ISSUE_UPDATE_REQUEST});
    
    const {data} = await axios.put(
      `/api/issues/${issue._id}`,
      issue
    );
    
    dispatch({ type: ISSUE_UPDATE_SUCCESS, payload: data});
    dispatch({ type: ISSUE_EDIT_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: ISSUE_UPDATE_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}