import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FullArticle from "./pages/FullArticle";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:articleIndex" element={<FullArticle />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
