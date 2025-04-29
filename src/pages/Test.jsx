import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const questions = [
  // 13 Numerical
  {
    id: 1,
    question: "What is 10 + 5?",
    options: ["12", "15", "18", "20"],
    correctAnswer: "15",
    type: "Numerical",
  },
  {
    id: 2,
    question: "What is 20 - 7?",
    options: ["10", "13", "15", "18"],
    correctAnswer: "13",
    type: "Numerical",
  },
  {
    id: 3,
    question: "What is 3 multiplied by 4?",
    options: ["7", "9", "12", "15"],
    correctAnswer: "12",
    type: "Numerical",
  },
  {
    id: 4,
    question: "What is 16 divided by 2?",
    options: ["4", "6", "8", "10"],
    correctAnswer: "8",
    type: "Numerical",
  },
  {
    id: 5,
    question: "What comes next: 2, 4, 6, ?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8",
    type: "Numerical",
  },
  {
    id: 6,
    question: "What is half of 10?",
    options: ["2", "4", "5", "8"],
    correctAnswer: "5",
    type: "Numerical",
  },
  {
    id: 7,
    question: "If you have 3 apples and get 2 more, how many do you have?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
    type: "Numerical",
  },
  {
    id: 8,
    question: "What is the value of 5 + 5?",
    options: ["8", "10", "12", "14"],
    correctAnswer: "10",
    type: "Numerical",
  },
  {
    id: 9,
    question: "What is 9 - 3?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "6",
    type: "Numerical",
  },
  {
    id: 10,
    question: "What is 2 times 8?",
    options: ["10", "14", "16", "20"],
    correctAnswer: "16",
    type: "Numerical",
  },
  {
    id: 11,
    question: "What is 15 divided by 3?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
    type: "Numerical",
  },
  {
    id: 12,
    question: "What comes next: 1, 3, 5, ?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "7",
    type: "Numerical",
  },
  {
    id: 13,
    question: "What is double of 7?",
    options: ["10", "12", "14", "16"],
    correctAnswer: "14",
    type: "Numerical",
  },

  // 13 Verbal
  {
    id: 14,
    question: "Which is a fruit?",
    options: ["Carrot", "Broccoli", "Apple", "Spinach"],
    correctAnswer: "Apple",
    type: "Verbal",
  },
  {
    id: 15,
    question: "Which is a color?",
    options: ["Table", "Chair", "Blue", "Book"],
    correctAnswer: "Blue",
    type: "Verbal",
  },
  {
    id: 16,
    question: "What do you use to write?",
    options: ["Fork", "Spoon", "Pen", "Knife"],
    correctAnswer: "Pen",
    type: "Verbal",
  },
  {
    id: 17,
    question: "A dog says:",
    options: ["Meow", "Woof", "Moo", "Quack"],
    correctAnswer: "Woof",
    type: "Verbal",
  },
  {
    id: 18,
    question: "A cat says:",
    options: ["Woof", "Meow", "Oink", "Hiss"],
    correctAnswer: "Meow",
    type: "Verbal",
  },
  {
    id: 19,
    question: "What is the opposite of 'big'?",
    options: ["Tall", "Small", "Happy", "Fast"],
    correctAnswer: "Small",
    type: "Verbal",
  },
  {
    id: 20,
    question: "What is the opposite of 'up'?",
    options: ["Down", "Left", "Right", "Forward"],
    correctAnswer: "Down",
    type: "Verbal",
  },
  {
    id: 21,
    question: "Which day comes after Monday?",
    options: ["Sunday", "Tuesday", "Friday", "Saturday"],
    correctAnswer: "Tuesday",
    type: "Verbal",
  },
  {
    id: 22,
    question: "What do birds have that helps them fly?",
    options: ["Scales", "Fur", "Feathers", "Shells"],
    correctAnswer: "Feathers",
    type: "Verbal",
  },
  {
    id: 23,
    question: "What do you wear on your feet?",
    options: ["Hat", "Shirt", "Shoes", "Gloves"],
    correctAnswer: "Shoes",
    type: "Verbal",
  },
  {
    id: 24,
    question: "Which season comes after summer?",
    options: ["Spring", "Autumn", "Winter", "Summer"],
    correctAnswer: "Autumn",
    type: "Verbal",
  },
  {
    id: 25,
    question: "What do you drink when you are thirsty?",
    options: ["Food", "Air", "Water", "Sunlight"],
    correctAnswer: "Water",
    type: "Verbal",
  },
  {
    id: 26,
    question: "What do you use to cut paper?",
    options: ["Hammer", "Nail", "Scissors", "Brush"],
    correctAnswer: "Scissors",
    type: "Verbal",
  },

  // 12 Logical
  {
    id: 27,
    question: "If it is day, the sun is shining. It is day. What can you say?",
    options: [
      "The moon is out.",
      "It is raining.",
      "The sun is shining.",
      "It is night.",
    ],
    correctAnswer: "The sun is shining.",
    type: "Logic",
  },
  {
    id: 28,
    question: "Apples are fruits. A banana is a fruit. Is a banana an apple?",
    options: ["Yes", "No", "Maybe", "Sometimes"],
    correctAnswer: "No",
    type: "Logic",
  },
  {
    id: 29,
    question:
      "If all cats like milk, and Fluffy is a cat, what does Fluffy like?",
    options: ["Water", "Fish", "Milk", "Bones"],
    correctAnswer: "Milk",
    type: "Logic",
  },
  {
    id: 30,
    question:
      "Big animals eat a lot. A mouse is a small animal. Does a mouse eat a lot?",
    options: ["Yes", "No", "Maybe", "Always"],
    correctAnswer: "No",
    type: "Logic",
  },
  {
    id: 31,
    question:
      "If you go to school on weekdays, and today is Saturday, did you go to school today?",
    options: ["Yes", "No", "Maybe", "Perhaps"],
    correctAnswer: "No",
    type: "Logic",
  },
  {
    id: 32,
    question:
      "If you sleep at night, and it is daytime, are you usually sleeping?",
    options: ["Yes", "No", "Sometimes", "Always"],
    correctAnswer: "No",
    type: "Logic",
  },
  {
    id: 33,
    question: "A circle is round. A ball is round. Is a ball a circle?",
    options: ["Yes", "No", "Maybe", "Can't tell"],
    correctAnswer: "No",
    type: "Logic",
  },
  {
    id: 34,
    question:
      "If you wear a coat when it's cold, and it is hot, should you wear a coat?",
    options: ["Yes", "No", "Maybe", "Only sometimes"],
    correctAnswer: "No",
    type: "Logic",
  },
  {
    id: 35,
    question: "You use a spoon to eat soup. Can you eat soup with a fork?",
    options: ["Yes", "No", "Maybe", "It depends"],
    correctAnswer: "Maybe",
    type: "Logic",
  },
  {
    id: 36,
    question:
      "If you see a red light, you stop. You see a green light. What should you do?",
    options: ["Stop", "Go", "Wait", "Turn around"],
    correctAnswer: "Go",
    type: "Logic",
  },
  {
    id: 37,
    question: "Fish live in water. Can birds live in water?",
    options: ["Yes", "No", "Some can", "All can"],
    correctAnswer: "No",
    type: "Logic",
  },
  {
    id: 38,
    question:
      "If you feel happy when you get a gift, and you receive a gift, how do you feel?",
    options: ["Sad", "Angry", "Happy", "Tired"],
    correctAnswer: "Happy",
    type: "Logic",
  },

  // 12 Spatial
  {
    id: 39,
    question: "Which shape has 3 sides?",
    options: ["Square", "Circle", "Triangle", "Rectangle"],
    correctAnswer: "Triangle",
    type: "Spatial",
  },
  {
    id: 40,
    question: "Which shape is round?",
    options: ["Square", "Triangle", "Circle", "Pentagon"],
    correctAnswer: "Circle",
    type: "Spatial",
  },
  {
    id: 41,
    question: "A box is usually what shape?",
    options: ["Sphere", "Cube", "Cone", "Cylinder"],
    correctAnswer: "Cube",
    type: "Spatial",
  },
  {
    id: 42,
    question: "Which way is up?",
    options: [
      "Pointing to the sky",
      "Pointing to the ground",
      "Pointing left",
      "Pointing right",
    ],
    correctAnswer: "Pointing to the sky",
    type: "Spatial",
  },
  {
    id: 43,
    question: "Which way is down?",
    options: [
      "Pointing to the sky",
      "Pointing to the ground",
      "Pointing forward",
      "Pointing backward",
    ],
    correctAnswer: "Pointing to the ground",
    type: "Spatial",
  },
  {
    id: 44,
    question:
      "If you turn left, which way are you facing relative to where you were?",
    options: ["Same way", "Opposite way", "To your left", "To your right"],
    correctAnswer: "To your left",
    type: "Spatial",
  },
  {
    id: 45,
    question:
      "If you turn right, which way are you facing relative to where you were?",
    options: ["Same way", "Opposite way", "To your left", "To your right"],
    correctAnswer: "To your right",
    type: "Spatial",
  },
  {
    id: 46,
    question: "What shape has 4 equal sides and 4 corners?",
    options: ["Rectangle", "Triangle", "Square", "Circle"],
    correctAnswer: "Square",
    type: "Spatial",
  },
  {
    id: 47,
    question: "What shape has 4 sides, where opposite sides are equal?",
    options: ["Square", "Triangle", "Rectangle", "Pentagon"],
    correctAnswer: "Rectangle",
    type: "Spatial",
  },
  {
    id: 48,
    question: "Imagine a ball. What shape is it?",
    options: ["Cube", "Pyramid", "Sphere", "Cylinder"],
    correctAnswer: "Sphere",
    type: "Spatial",
  },
  {
    id: 49,
    question: "A roof of a house is often what shape?",
    options: ["Square", "Triangle", "Circle", "Rectangle"],
    correctAnswer: "Triangle",
    type: "Spatial",
  },
  {
    id: 50,
    question: "How many corners does a triangle have?",
    options: ["2", "3", "4", "0"],
    correctAnswer: "3",
    type: "Spatial",
  },
];

const Test = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
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
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    if (answers.length !== questions.length || answers.includes(undefined)) {
      setShowModal(true);
      return;
    }
    const score = answers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    navigate(`/result?points=${score}`);
  };

  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;
  return (
    <div className="test-container">
      <div style={{ padding: "20px" }}>
        {/* Progress Bar */}
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{ marginBottom: "8px", fontWeight: "bold", color: "black" }}
          >
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
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 style={{ color: "black" }}>
              You haven't answered all questions!
            </h2>
            <button
              className="modal-button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
