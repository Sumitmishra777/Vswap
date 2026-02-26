import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("vswap_token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("vswap_token");
    localStorage.removeItem("vswap_user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Vswap</h2>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <div className={open ? "links links-open" : "links"}>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/courses" className="nav-link">
          Courses
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        {!isLoggedIn ? (
          <>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="signup-btn">
              Sign Up
            </NavLink>
          </>
        ) : (
          <button
            className="nav-link"
            onClick={handleLogout}
            style={{
              background: "none",
              border: "none",
              color: "#eee",
              cursor: "pointer",
            }}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
