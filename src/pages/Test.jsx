import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "What comes next in the series: 1, 4, 9, 16, 25, ___?",
    options: ["36", "30", "42", "49"],
    correctAnswer: "36", // Answer is 36 because the pattern is squares of integers
    type: "Numerical",
  },
  {
    id: 2,
    question: "Which word is the odd one out?",
    options: ["Apple", "Banana", "Carrot", "Grapes"],
    correctAnswer: "Carrot", // Carrot is the odd one out (it's a vegetable, others are fruits)
    type: "Verbal",
  },
  {
    id: 3,
    question:
      "What is the missing number in the series: 2, 6, 12, 20, 30, ___?",
    options: ["40", "42", "44", "48"],
    correctAnswer: "42", // Pattern: +4, +6, +8, +10...
    type: "Numerical",
  },
  {
    id: 4,
    question:
      "Which number should come next in the series: 5, 11, 17, 23, 29, ___?",
    options: ["35", "36", "37", "38"],
    correctAnswer: "35", // The difference between the numbers is 6.
    type: "Numerical",
  },
  {
    id: 5,
    question: "Which number is a prime number?",
    options: ["2", "4", "16", "81"],
    correctAnswer: "2", // All other numbers are prime, 21 is not.
    type: "Numerical",
  },
  {
    id: 6,
    question: "Which number is the odd one out?",
    options: ["13", "17", "19", "21"],
    correctAnswer: "21", // All other numbers are prime, 21 is not.
    type: "Numerical",
  },
  {
    id: 7,
    question: "Which of the following is the largest number?",
    options: ["4.25", "4.2", "4.28", "4.4"],
    correctAnswer: "4.4", // Largest is 4.4.
    type: "Numerical",
  },
  {
    id: 8,
    question: "How many months have 28 days?",
    options: ["1", "12", "6", "2"],
    correctAnswer: "12", // All months have at least 28 days.
    type: "Verbal",
  },
  {
    id: 9,
    question:
      "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):",
    options: ["Ocean", "Country", "City", "Animal"],
    correctAnswer: "Ocean", // Rearranged, it spells 'PACIFIC'
    type: "Verbal",
  },
  {
    id: 10,
    question: "Which word does not belong?",
    options: ["Hammer", "Screwdriver", "Wrench", "Pencil"],
    correctAnswer: "Pencil", // Pencil is not a tool for driving screws or bolts.
    type: "Verbal",
  },
  {
    id: 11,
    question: "Which of the following numbers is divisible by 9?",
    options: ["21", "33", "45", "55"],
    correctAnswer: "45", // 45 is divisible by 9.
    type: "Numerical",
  },
  {
    id: 12,
    question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ___?",
    options: ["13", "12", "11", "10"],
    correctAnswer: "13", // Fibonacci sequence.
    type: "Numerical",
  },
  {
    id: 13,
    question: "What is the opposite of 'ascend'?",
    options: ["Descend", "Climb", "Fall", "Rise"],
    correctAnswer: "Descend", // 'Ascend' means to go up, opposite is 'Descend'.
    type: "Verbal",
  },
  {
    id: 14,
    question: "What is 7 multiplied by 6?",
    options: ["42", "36", "48", "54"],
    correctAnswer: "42", // Simple multiplication.
    type: "Numerical",
  },
  {
    id: 15,
    question: "Which of the following words is most similar to 'Trustworthy'?",
    options: ["Reliable", "Dishonest", "Cunning", "Lazy"],
    correctAnswer: "Reliable", // Trustworthy means reliable.
    type: "Verbal",
  },
  {
    id: 16,
    question:
      "If 3 people can build 3 chairs in 3 days, how many chairs can 6 people build in 6 days?",
    options: ["12", "18", "6", "9"],
    correctAnswer: "12", // 6 people build 2 chairs per day, for 6 days = 12 chairs.
    type: "Numerical",
  },
  {
    id: 17,
    question: "What comes next in the sequence: 2, 3, 5, 8, 12, 17, ___?",
    options: ["22", "23", "24", "25"],
    correctAnswer: "23", // Sequence: Add 1, 2, 3, 4, 5... so next will be 17 + 6 = 23.
    type: "Numerical",
  },
  {
    id: 18,
    question: "Which letter completes the series: D, G, J, M, ___?",
    options: ["O", "P", "Q", "R"],
    correctAnswer: "O", // Every letter is +3 in the alphabet.
    type: "Verbal",
  },
  {
    id: 19,
    question: "What is the next number in the series: 3, 6, 9, 12, 15, ___?",
    options: ["16", "18", "20", "17"],
    correctAnswer: "18", // The difference is 3 each time.
    type: "Numerical",
  },
  {
    id: 20,
    question:
      "If all roses are flowers and some flowers fade quickly, can it be said that some roses fade quickly?",
    options: ["Yes", "No", "Maybe", "Can't say"],
    correctAnswer: "Maybe", // This is a logical deduction problem.
    type: "Logic",
  },
  {
    id: 21,
    question: "Which number comes next in the series: 3, 9, 27, 81, ___?",
    options: ["243", "200", "150", "120"],
    correctAnswer: "243", // The pattern is multiplication by 3.
    type: "Numerical",
  },
  {
    id: 22,
    question: "How many sides does a hexagon have?",
    options: ["6", "8", "4", "10"],
    correctAnswer: "6", // A hexagon has 6 sides.
    type: "Verbal",
  },
  {
    id: 23,
    question: "If the day before yesterday was Sunday, what day is it today?",
    options: ["Tuesday", "Wednesday", "Monday", "Thursday"],
    correctAnswer: "Tuesday", // Logical deduction based on days of the week.
    type: "Logic",
  },
  {
    id: 24,
    question: "What is the square root of 144?",
    options: ["12", "14", "16", "18"],
    correctAnswer: "12", // Square root of 144 is 12.
    type: "Numerical",
  },
  {
    id: 25,
    question: "Which of these numbers is the smallest?",
    options: ["0.5", "1.5", "0.05", "0.15"],
    correctAnswer: "0.05", // The smallest number is 0.05.
    type: "Numerical",
  },
  {
    id: 26,
    question: "What comes next in the sequence: 2, 4, 8, 16, ___?",
    options: ["24", "32", "64", "48"],
    correctAnswer: "32", // The pattern is doubling each time.
    type: "Numerical",
  },
  {
    id: 27,
    question: "Which word is most similar to 'Ambiguous'?",
    options: ["Clear", "Vague", "Direct", "Explicit"],
    correctAnswer: "Vague", // Ambiguous means unclear or vague.
    type: "Verbal",
  },
  {
    id: 28,
    question: "How many degrees are in a right angle?",
    options: ["90", "180", "45", "60"],
    correctAnswer: "90", // A right angle is 90 degrees.
    type: "Verbal",
  },
  {
    id: 29,
    question: "Which of the following is the largest prime number?",
    options: ["17", "23", "31", "19"],
    correctAnswer: "31", // The largest prime number here is 31.
    type: "Numerical",
  },
  {
    id: 30,
    question: "What is the next number in the sequence: 1, 1, 2, 6, 24, ___?",
    options: ["120", "100", "110", "90"],
    correctAnswer: "120", // This is a factorial sequence (1!, 2!, 3!, 4!, 5! = 120).
    type: "Numerical",
  },
  {
    id: 31,
    question: "Which of these is a synonym of 'Jovial'?",
    options: ["Sad", "Happy", "Angry", "Gloomy"],
    correctAnswer: "Happy", // Jovial means cheerful or happy.
    type: "Verbal",
  },
  {
    id: 32,
    question:
      "Which number comes next in the sequence: 1, 1, 2, 6, 24, 120, ___?",
    options: ["720", "100", "200", "300"],
    correctAnswer: "720", // This is a factorial sequence.
    type: "Numerical",
  },
  {
    id: 33,
    question: "What is 3 times 4?",
    options: ["12", "14", "10", "16"],
    correctAnswer: "12", // Simple multiplication.
    type: "Numerical",
  },
  {
    id: 34,
    question: "Which of the following is the odd one out?",
    options: ["Triangle", "Rectangle", "Circle", "Square"],
    correctAnswer: "Circle", // All others are polygons.
    type: "Spatial",
  },
  {
    id: 35,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris", // Capital of France is Paris.
    type: "Verbal",
  },
  {
    id: 36,
    question: "What is the next letter in the sequence: A, C, E, G, ___?",
    options: ["I", "H", "J", "K"],
    correctAnswer: "I", // Every letter is +2 in the alphabet.
    type: "Verbal",
  },
  {
    id: 37,
    question: "How many hours are in a day?",
    options: ["12", "24", "36", "48"],
    correctAnswer: "24", // There are 24 hours in a day.
    type: "Verbal",
  },
  {
    id: 38,
    question: "Which of these numbers is divisible by 3?",
    options: ["20", "33", "21", "25"],
    correctAnswer: "21", // 21 is divisible by 3.
    type: "Numerical",
  },
  {
    id: 39,
    question: "Which of the following is the opposite of 'Generous'?",
    options: ["Selfish", "Kind", "Charitable", "Caring"],
    correctAnswer: "Selfish", // Opposite of generous is selfish.
    type: "Verbal",
  },
  {
    id: 40,
    question: "What is the value of 5 squared?",
    options: ["20", "25", "30", "35"],
    correctAnswer: "25", // 5 squared is 25.
    type: "Numerical",
  },
  {
    id: 41,
    question: "What is 15% of 200?",
    options: ["30", "35", "40", "25"],
    correctAnswer: "30", // 15% of 200 is 30.
    type: "Numerical",
  },
  {
    id: 42,
    question: "Which of these shapes has 8 sides?",
    options: ["Hexagon", "Octagon", "Pentagon", "Decagon"],
    correctAnswer: "Octagon", // An octagon has 8 sides.
    type: "Spatial",
  },
  {
    id: 43,
    question: "How many players are on a football team?",
    options: ["9", "11", "12", "10"],
    correctAnswer: "11", // A football team has 11 players.
    type: "Verbal",
  },
  {
    id: 44,
    question: "Which word is the odd one out?",
    options: ["Apple", "Banana", "Orange", "Pineapple"],
    correctAnswer: "Pineapple", // Pineapple is not a citrus fruit.
    type: "Verbal",
  },
  {
    id: 45,
    question: "What is the next number in the sequence: 4, 7, 11, 16, ___?",
    options: ["20", "22", "25", "24"],
    correctAnswer: "22", // The difference between numbers is increasing by 1.
    type: "Numerical",
  },
  {
    id: 46,
    question: "Which number is divisible by 5?",
    options: ["23", "45", "37", "55"],
    correctAnswer: "55", // 55 is divisible by 5.
    type: "Numerical",
  },
  {
    id: 47,
    question: "If you divide 100 by 4, what is the result?",
    options: ["20", "25", "30", "15"],
    correctAnswer: "25", // 100 divided by 4 is 25.
    type: "Numerical",
  },
  {
    id: 48,
    question: "What is the square of 9?",
    options: ["81", "72", "90", "60"],
    correctAnswer: "81", // Square of 9 is 81.
    type: "Numerical",
  },
  {
    id: 49,
    question: "Which number comes next in the sequence: 1, 4, 9, 16, ___?",
    options: ["20", "25", "24", "30"],
    correctAnswer: "25", // Sequence is the square of numbers (1^2, 2^2, 3^2, 4^2...).
    type: "Numerical",
  },
  {
    id: 50,
    question: "Which country is the largest by area?",
    options: ["China", "Canada", "USA", "Russia"],
    correctAnswer: "Russia", // Russia is the largest country by area.
    type: "Verbal",
  },
];

const Test = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const q = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const points = Math.floor(Math.random() * 101);
      navigate(`/result?points=${points}`);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const score = answers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    navigate(`/result?points=${score}`);
  };

  return (
    <div className="test-container">
      <h2 className="question-type">{q.type} Question </h2>
      <p className="question-text">{q.question}</p>
      <div className="options-container">
        {q.options.map((opt) => (
          <button
            key={opt}
            className={`button option-button ${
              answers[currentQuestionIndex] === opt ? "selected" : ""
            }`}
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button
          className="button prev-button"
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button className="button next-button" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className="button submit-button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Test;
