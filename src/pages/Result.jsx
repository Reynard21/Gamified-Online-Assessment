import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "./Test";

const classifyIQ = (points) => {
  if (points >= 30) return "You have a High IQ!";
  if (points >= 20) return "You have an Average IQ!";
  return "You have a Low IQ!";
};

const Result = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const points = parseInt(query.get("points") || "0");

  // Use dynamic number of questions
  const totalQuestions = questions.length;
  const percentage = (points / totalQuestions) * 100;

  const getMedalImage = (percentage) => {
    if (percentage <= 40) return "/images/bronze-medal.png";
    if (percentage <= 60) return "/images/silver-medal.png";
    return "/images/gold-medal.png";
  };

  const medalImage = getMedalImage(percentage);
  const iqLevel = classifyIQ(points);

  const navigate = useNavigate();

  return (
    <div className="result-container">
      <h1 className="result-title">Your Result</h1>
      <p className="result-text">Points: {points}</p>
      <div className="medal-container">
        <img src={medalImage} alt="Medal" className="medal" />
      </div>
      <p className="result-text">IQ Level: {iqLevel}</p>
      <button className="button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Result;
