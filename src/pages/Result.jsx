// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Result = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const {
//     score = 0,
//     medal = "bronze",
//     iqClass = "low",
//     weakAreas = [],
//     name = "Anonymous",
//     age = "N/A",      
//   } = location.state || {};

//   const totalQuestions = 50;
//   const isPerfectScore = score === totalQuestions; 

//   const getMedalImage = (medalType) => {
//     if (!medalType) return '';
//     return `/images/${medalType.toLowerCase()}-medal.png`;
//   };

//   const medalImagePath = getMedalImage(medal);

//   return (
//     <div className="result-container">
//       <h1 className="result-title">
//         {isPerfectScore ? "🎉 Perfect Score!" : "Your Results"}
//       </h1>
      
//       <div className="result-details">
//         <p className="result-text">🎯 Score: <strong>{score}/{totalQuestions}</strong></p>
//         <p className="result-text">👤 {name}, {age}</p>
//         <p className="result-text">🧠 IQ Classification: <strong>{iqClass}</strong></p>
//       </div>

//       {medalImagePath && (
//         <img src={medalImagePath} alt={`${medal} Medal`} className="medal" />
//       )}

//       {!isPerfectScore && weakAreas.length > 0 && (
//         <div className="weak-areas">
//           <h3>🚨 Areas Needing Improvement</h3>
//           <ul>
//             {weakAreas.map((area, index) => (
//               <li key={index}>{area}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {isPerfectScore && (
//         <div className="perfect-score-message">
//           <p>You aced every category! 🏆</p>
//         </div>
//       )}

//       <button className="result-button" onClick={() => navigate("/")}>
//         🏠 Return Home
//       </button>
//     </div>
//   );
// };
// export default Result;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    score = 0,
    name = "Anonymous",
    age = "N/A",
    points = 0,
    maxStreak = 0,
    totalQuestions = 50,
  } = location.state || {};

  const percentage = (score / totalQuestions) * 100;
  const isPerfectScore = score === totalQuestions;

  // Determine medal
  const medal =
    percentage >= 80 ? "gold" : percentage >= 60 ? "silver" : "bronze";
  const medalImage = `/images/${medal}-medal.png`;

  // Streak Badge Title
  let streakTitle = "";
  if (maxStreak >= 10) streakTitle = "💜 Ultra Streaker!";
  else if (maxStreak >= 5) streakTitle = "💙 Streak Master!";
  else if (maxStreak >= 2) streakTitle = "🟠 Getting Hot!";

  return (
    <div className="result-container">
      <h1 className="result-title">
        {isPerfectScore ? "🎉 Perfect Score!" : "Your Results"}
      </h1>

      <div className="result-details">
        <p className="result-text">👤 {name}, {age}</p>
        <p className="result-text">🎯 Score: <strong>{score}/{totalQuestions}</strong></p>
        <p className="result-text">⭐ Points Earned: <strong>{points}</strong></p>
        <p className="result-text">🔥 Max Streak: <strong>{maxStreak}</strong></p>
      </div>

      {medalImage && (
        <div className="medal-container">
          <img src={medalImage} alt={`${medal} medal`} className="medal" />
        </div>
      )}

      {streakTitle && (
        <div className={`streak-fire ${maxStreak >= 10 ? "purple" : maxStreak >= 5 ? "blue" : "orange"}`}>
          {streakTitle}
        </div>
      )}

      {isPerfectScore && (
        <div className="perfect-score-message">
          <p>You aced the entire test! 🏆 Well done!</p>
        </div>
      )}

      <button className="result-button" onClick={() => navigate("/")}>
        🏠 Return Home
      </button>
    </div>
  );
};

export default Result;
