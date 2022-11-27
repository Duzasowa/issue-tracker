import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import NotFound from './screens/NotFound';
import SingleIssue from "./screens/SingleIssue";
import IssueEditScreen from "./screens/IssueEditScreen";
import AddProduct from "./screens/AddIssue";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}/>
        <Route path="/issues/:id/edit" element={<SingleIssue/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/addproduct" element={<AddProduct/>} />
      </Routes>
    </Router>
  )
}

export default App;
