import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import IssueScreen from './screens/IssueScreen';
import NotFound from './screens/NotFound';
;
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}/>
        <Route exact path="/login" element={<IssueScreen/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;
