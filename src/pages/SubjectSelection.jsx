import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SubjectSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, age } = location.state || {};

const handleSubjectSelect = (subject) => {
  navigate(`/test/${subject.toLowerCase()}`, { state: { name, age } });
};

  if (!name || !age) {
    return (
      <div className="start-container">
        <div className="start-card">
          <h2 className="start-title">Missing user info</h2>
          <p className="start-subtitle">Please go back and enter your name and age.</p>
          <button className="start-button" onClick={() => navigate("/")}>Back to Start</button>
        </div>
      </div>
    );
  }

  return (
    <div className="subject-selection">
  <div className="subject-card">
    <h1 className="subject-title">🧪 Choose a Subject</h1>
    <p className="subject-subtitle">Hi {name}, pick a subject you'd like to test!</p>
    <div className="subject-buttons">
      <button className="subject-button" onClick={() => handleSubjectSelect("Math")}>🧮 Math</button>
      <button className="subject-button" onClick={() => handleSubjectSelect("English")}>📘 English</button>
      <button className="subject-button" onClick={() => handleSubjectSelect("Biology")}>🧬 Biology</button>
      <button className="subject-button" onClick={() => handleSubjectSelect("Physics")}>🔭 Physics</button>
    </div>
  </div>
</div>

  );
};

export default SubjectSelection;
