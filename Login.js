import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save JWT token
        localStorage.setItem("vswap_token", data.token);
        localStorage.setItem("vswap_user", data.name);

        setMessage("Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        setMessage(data.msg);
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {message && <p className="msg">{message}</p>}
    </div>
  );
}

export default Login;
