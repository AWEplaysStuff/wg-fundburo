import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import config from "./config";
import Spinner from "./Spinner";

const Base_URL = config.baseURL;

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rollno, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRollNoChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert("Passwörter stimmen nicht überein");
      return;
    }

    const data = {
      username: name,
      rollno: rollno,
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(`${Base_URL}/signup`, data);

      if (res.status === 201) {
        alert("Erfolgreich registriert, bitte anmelden!");
        setLoading(false);
        navigate("/sign-in");
      } else {
        alert("Registrierung fehlgeschlagen. Bitte erneut versuchen.");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("E-Mail existiert bereits. Bitte eine andere verwenden.");
      } else {
        console.error(
          "Error during signup:",
          error.response ? error.response.data : error.message
        );
        alert("Fehler bei der Registrierung. Bitte erneut versuchen.");
      }
    } finally {
      setLoading(false); // Set loading state to false after login attempt completes
    }
  };

  return (
    <>
      <Navbar />
      <div className="card signup-card">
        <h2>Registrieren</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Kennung:</label>
            <input
              type="text"
              id="rollno"
              name="rollno"
              value={rollno}
              onChange={handleRollNoChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Passwort:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Passwort wiederholen:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button
            className="submit-button"
            type="submit"
            onClick={handleSignUp}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Registrieren"}{" "}
            {/* Show Spinner component when loading */}
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
