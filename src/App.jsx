import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </Router>
);

export default App;
