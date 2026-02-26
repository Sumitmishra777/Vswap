import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Exchange Skills. Grow Together.</h1>

        <p className="home-subtitle">
          Learn new skills, share your knowledge, and grow with the community—
          without spending money. Vswap connects learners and teachers
          worldwide.
        </p>

        <button className="cta-btn" onClick={() => navigate("/courses")}>
          Start Exchanging Skills
        </button>
      </div>

      <div className="hero-image"></div>
    </div>
  );
}

export default Home;
