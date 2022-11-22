import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import IssueScreen from './screens/IssueScreen';
import NotFound from './screens/NotFound';
import SingleIssues from "./screens/SingleIssues";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}/>
        <Route exact path="/login" element={<IssueScreen/>}/>
        <Route path="/issues/:id" component={<SingleIssues/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;
