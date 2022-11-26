import { ISSUE_DETAILS_FAIL, ISSUE_DETAILS_REQUEST, ISSUE_DETAILS_SUCCESS, ISSUE_LIST_FAIL, ISSUE_LIST_REQUEST, ISSUE_LIST_SUCCESS, ISSUE_UPDATE_FAIL, ISSUE_UPDATE_REQUEST, ISSUE_UPDATE_RESET, ISSUE_UPDATE_SUCCESS } from "../Constants/IssueConstants";

// ISSUE LIST
export const issueListReducer = (state = { issues: [] }, action) => {
  switch (action.type) {
    case ISSUE_LIST_REQUEST:
      return { loading: true, issues: [] };
    case ISSUE_LIST_SUCCESS:
      return { loading: false, issues: action.payload };
    case ISSUE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default: 
      return state;
  }
}

// ISSUE SINGLER
export const issueDetailsReducer = (
  state = { issue: { reviews: [] } }, 
  action
) => {
  switch (action.type) {
    case ISSUE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ISSUE_DETAILS_SUCCESS:
      return { loading: false, issue: action.payload };
    case ISSUE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default: 
      return state;
  }
}

// UPDATE ISSUE
export const issueUpdateReducer = (state = { issue: {} }, action) => {
  switch (action.type) {
    case ISSUE_UPDATE_REQUEST:
      return { loading: true };
    case ISSUE_UPDATE_SUCCESS:
      return { loading: false, success: true, issue: action.payload };
    case ISSUE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ISSUE_UPDATE_RESET:
      return { issue: {} };
    default: 
      return state;
  }
}