import React from "react";

function Courses() {
  const courses = [
    { title: "Web Development", desc: "HTML, CSS, JavaScript, React, Backend" },
    { title: "Graphic Design", desc: "Photoshop, Illustrator, UI/UX basics" },
    { title: "Digital Marketing", desc: "SEO, Ads, Content Strategy" },
    { title: "Python Programming", desc: "Basics to advanced scripting" },
    { title: "Public Speaking", desc: "Confidence, delivery, body language" },
    { title: "Photography", desc: "Camera basics, editing, aesthetics" },
  ];

  return (
    <div className="courses-section">
      <h1 className="courses-title">Our Courses</h1>
      <p className="courses-sub">Learn community-powered skills anytime</p>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <button
              className="course-btn"
              onClick={() => alert(`Exploring ${course.title}`)}>
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
