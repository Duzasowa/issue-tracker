import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import NotFound from './screens/NotFound';
import SingleIssue from "./screens/SingleIssue";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}/>
        <Route path="/issues/:id" element={<SingleIssue/>} exact/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;
