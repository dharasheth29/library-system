import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AddViewBook from "./components/Books/AddViewBook";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-view-book" element={<AddViewBook />} />
      </Routes>
    </Router>
  );
};

export default App;
