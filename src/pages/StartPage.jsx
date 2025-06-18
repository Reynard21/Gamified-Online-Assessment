import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const StartPage = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
  if (!name || !age) return alert('Please enter name and age');
  setUserInfo({ name, age });
  navigate('/home'); 
};

  return (
    <div className="start-container">
      <div className="start-card">
        <h1 className="start-title">🧠 Ready for your Test?</h1>
        <p className="start-subtitle">Enter your details to begin your Test!</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="start-input"
        />
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="start-input"
        />
        <button onClick={handleStart} className="start-button">Start Test</button>
      </div>
    </div>
  );
};

export default StartPage;