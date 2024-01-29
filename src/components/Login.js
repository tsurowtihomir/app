import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setIsValid(true);
      navigate("/table");
    } else {
      setIsValid(false);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsValid(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValid(true);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="button" onClick={handleLogin} disabled={!isValid}>
          Login
        </button>

        {!isValid && (
          <p className="error-message">
            Please enter both username and password.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
