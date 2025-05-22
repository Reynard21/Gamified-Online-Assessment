import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    score = 0,
    medal = "bronze",
    iqClass = "low",
    weakAreas = [],
    name = "Anonymous",
    age = "N/A",      
  } = location.state || {};

  const totalQuestions = 50;
  const isPerfectScore = score === totalQuestions; 

  const getMedalImage = (medalType) => {
    if (!medalType) return '';
    return `/images/${medalType.toLowerCase()}-medal.png`;
  };

  const medalImagePath = getMedalImage(medal);

  return (
    <div className="result-container">
      <h1 className="result-title">
        {isPerfectScore ? "🎉 Perfect Score!" : "Your Results"}
      </h1>
      
      <div className="result-details">
        <p className="result-text">🎯 Score: <strong>{score}/{totalQuestions}</strong></p>
        <p className="result-text">👤 {name}, {age}</p>
        <p className="result-text">🧠 IQ Classification: <strong>{iqClass}</strong></p>
      </div>

      {medalImagePath && (
        <img src={medalImagePath} alt={`${medal} Medal`} className="medal" />
      )}

      {!isPerfectScore && weakAreas.length > 0 && (
        <div className="weak-areas">
          <h3>🚨 Areas Needing Improvement</h3>
          <ul>
            {weakAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>
      )}

      {isPerfectScore && (
        <div className="perfect-score-message">
          <p>You aced every category! 🏆</p>
        </div>
      )}

      <button className="result-button" onClick={() => navigate("/")}>
        🏠 Return Home
      </button>
    </div>
  );
};
export default Result;