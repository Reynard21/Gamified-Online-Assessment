import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import SubjectSelection from './pages/SubjectSelection';
import Test from './pages/Test';
import Result from './pages/Result';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({ name: '', age: '' });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage setUserInfo={setUserInfo} />} />
<Route path="/subjects" element={<SubjectSelection />} />
        <Route path="/test/:subject" element={<Test userInfo={userInfo} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
