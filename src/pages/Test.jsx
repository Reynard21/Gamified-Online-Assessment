// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { questions } from '../data/questions'; 

// const Test = ({ userInfo }) => { 
//   const { name, age } = userInfo; 
//   const [answers, setAnswers] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();
//   const q = questions[currentQuestionIndex];

//   const handleAnswer = (answer) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestionIndex] = answer;
//     setAnswers(newAnswers);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       handleSubmit();
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmit = async () => {
//     if (answers.length !== questions.length || answers.includes(undefined)) {
//       setShowModal(true);
//       return;
//     }

//     const processedAnswers = questions.map((question, index) => {
//       return answers[index] === question.correctAnswer ? 1 : 0;
//     });

//     try {
//       const response = await fetch("http://localhost:5000/api/submit", { 
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ name, age, answers: processedAnswers }) 
//       });

//       if (!response.ok) {
//         throw new Error(`Server error: ${response.status}`);
//       }

//       const result = await response.json();
//       navigate("/result", {
//         state: {
//           name: result.name, 
//           age: result.age,   
//           score: result.score,
//           medal: result.medals, 
//           iqClass: result.iqClass,
//           weakAreas: result.weakAreas
//         }
//       });

//     } catch (error) {
//       console.error("Submission failed:", error);
//       alert("Failed to submit test. Please try again.");
//     }
//   };

//   const progressPercentage =
//     ((currentQuestionIndex + 1) / questions.length) * 100;

//   return (
//     <div className="test-container">
//       <div style={{ padding: "20px" }}>
//         <div style={{ marginBottom: "20px" }}>
//           <div
//             style={{ marginBottom: "8px", fontWeight: "bold", color: "black" }}
//           >
//             Question {currentQuestionIndex + 1} of {questions.length}
//           </div>
//           <div
//             style={{
//               height: "10px",
//               background: "#eee",
//               borderRadius: "5px",
//               overflow: "hidden",
//             }}
//           >
//             <div
//               style={{
//                 height: "100%",
//                 width: `${progressPercentage}%`,
//                 background: "linear-gradient(to right, #4facfe, #00f2fe)",
//                 transition: "width 0.4s ease-in-out",
//               }}
//             />
//           </div>
//         </div>

//         <h2 className="question-type">{q.type} Question </h2>
//         <p className="question-text">{q.question}</p>
//         <div className="options-container">
//           {q.options.map((opt) => (
//             <button
//               key={opt}
//               className={`button option-button ${
//                 answers[currentQuestionIndex] === opt ? "selected" : ""
//               }`}
//               onClick={() => handleAnswer(opt)}
//             >
//               {opt}
//             </button>
//           ))}
//         </div>
//         <div className="navigation-buttons">
//           <button
//             className="button prev-button"
//             onClick={handlePrev}
//             disabled={currentQuestionIndex === 0}
//           >
//             Previous
//           </button>
//           {currentQuestionIndex < questions.length - 1 ? (
//             <button
//               className="button next-button"
//               onClick={handleNext}
//               disabled={answers[currentQuestionIndex] === undefined}
//             >
//               Next
//             </button>
//           ) : (
//             <button className="button submit-button" onClick={handleSubmit}>
//               Submit
//             </button>
//           )}
//         </div>
//       </div>
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2 style={{ color: "black" }}>
//               You haven't answered all questions!
//             </h2>
//             <button
//               className="modal-button"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

const Test = ({ userInfo }) => {
  const { name, age } = userInfo;
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);
  const [showPointPopup, setShowPointPopup] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isStreakBroken, setIsStreakBroken] = useState(false);
  const navigate = useNavigate();

  const q = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    if (hasAnswered) return;

    const correct = answer === q.correctAnswer;
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
    setHasAnswered(true);

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setScore(score + 1);
      setPoints(points + 1);
      setShowPointPopup(true);
      setTimeout(() => setShowPointPopup(false), 1000);

      if (newStreak > maxStreak) setMaxStreak(newStreak);

      setTimeout(() => {
        goToNext();
      }, newStreak >= 2 ? 2000 : 1000);
    } else {
  if (streak >= 2) {
    setIsStreakBroken(true);
    setTimeout(() => {
      setIsStreakBroken(false);
      setStreak(0); // reset if broken
      goToNext();
    }, 2000);
  } else {
    setStreak(0); // ✅ tambahkan ini untuk reset saat streak belum aktif
    setTimeout(() => {
      goToNext();
    }, 1000);
  }
}

  };

  const goToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setHasAnswered(false);
    } else {
      navigate("/result", {
        state: {
          name,
          age,
          score,
          maxStreak,
          points,
          totalQuestions: questions.length,
        },
      });
    }
  };

  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  const streakClass =
    streak >= 10 ? "purple" : streak >= 5 ? "blue" : "orange";

  return (
    <div className="test-container">
      <div className="xp-bar">⭐ Points: {points}</div>
      {showPointPopup && <div className="xp-popup">+1 Point</div>}

      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: "bold", color: "black" }}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          <div
            style={{
              height: "10px",
              background: "#eee",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progressPercentage}%`,
                background: "linear-gradient(to right, #4facfe, #00f2fe)",
                transition: "width 0.4s ease-in-out",
              }}
            />
          </div>
        </div>

        <h2 className="question-type">{q.type} Question</h2>
        <p className="question-text">{q.question}</p>

        <div className="options-container">
          {q.options.map((opt) => (
            <button
              key={opt}
              className={`button option-button ${
                answers[currentQuestionIndex] === opt ? "selected" : ""
              }`}
              onClick={() => handleAnswer(opt)}
              disabled={hasAnswered}
              style={{
                cursor: hasAnswered ? "not-allowed" : "pointer",
                opacity: hasAnswered ? 0.6 : 1,
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Streak UI always visible when active */}
        {(streak >= 2 || isStreakBroken) && (
          <div
            className={`streak-fire ${
              isStreakBroken ? "broken" : streakClass
            }`}
          >
            {isStreakBroken
              ? "💥 Streak Broken!"
              : `🔥 You're on a ${streak}-answer streak!`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;








