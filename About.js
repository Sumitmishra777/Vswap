import React from "react";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Vswap</h1>
        <p>Learn. Teach. Exchange. Grow Together.</p>
      </section>

      {/* About Content */}
      <section className="about-section">
        <div className="about-box">
          <h2>Who We Are</h2>
          <p>
            Vswap is a modern skill-exchange platform designed to help people
            learn, teach, and grow together—without using money. We believe that
            everyone has something valuable to offer, whether it's a technical
            skill, creative talent, or practical life skill.
          </p>
        </div>

        <div className="about-image"></div>
      </section>

      {/* Vision Mission */}
      <section className="vm-section">
        <div className="vm-card">
          <h3>Our Vision</h3>
          <p>
            To build the world’s largest community-driven skill-exchange network
            where learning is accessible, collaborative, and free for everyone.
          </p>
        </div>

        <div className="vm-card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower individuals by connecting them through
            skill sharing, making learning accessible and promoting a culture of
            collaboration and mutual growth.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="details-section">
        <h2>What We Do</h2>
        <p>
          Vswap is a platform where users can teach skills they know, learn new
          skills from others, exchange knowledge without money, connect with
          like-minded learners, and collaborate through programs, courses, and
          workshops.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Free learning opportunities</li>
          <li>No financial barriers</li>
          <li>Peer-to-peer teaching</li>
          <li>Build real connections</li>
          <li>Explore new passions</li>
          <li>Improve your experience & career</li>
        </ul>
      </section>

      {/* Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>We learn and grow together by sharing knowledge.</p>
          </div>

          <div className="value-card">
            <h3>Community</h3>
            <p>Every member is welcomed, respected, and valued.</p>
          </div>

          <div className="value-card">
            <h3>Accessibility</h3>
            <p>Knowledge should be available to everyone, everywhere.</p>
          </div>

          <div className="value-card">
            <h3>Exchange</h3>
            <p>Everyone has something to teach and something to learn.</p>
          </div>

          <div className="value-card">
            <h3>Growth</h3>
            <p>We enable personal and professional development for all.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
