import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">IQ Test App</h1>
      <button className="button" onClick={() => navigate("/test")}>
        Start IQ Test
      </button>
    </div>
  );
};

export default Home;
