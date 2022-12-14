import { createStore, combineReducers, applyMiddleware} from "redux"; 
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { issueCreateReducer, issueDeleteReducer, issueDetailsReducer, issueEditReducer, issueListReducer, issueUpdateReducer } from "./Reducers/IssueReducers";

const reducer = combineReducers({
  issueList: issueListReducer,
  issueDetails: issueDetailsReducer,
  issueCreate: issueCreateReducer,
  issueUpdate: issueUpdateReducer,
  issueEdit: issueEditReducer,
  issueDelete: issueDeleteReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;