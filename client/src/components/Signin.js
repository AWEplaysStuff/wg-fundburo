import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import config from "./config";
import { useDispatch } from "react-redux";
import { login } from "../utils/userSlice";
import Spinner from "./Spinner"; // Assuming you have a Spinner component

const Base_URL = config.baseURL;

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleNavigateToSignUp = () => {
    navigate("/sign-up");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when starting sign-in

    const data = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(`${Base_URL}/login`, data, {
        withCredentials: true,
      });

      if (res.status === 401) {
        alert("Ungültige Anmeldedaten");
      } else if (res.status === 500) {
        alert("Serverfehler");
      }

      const token = res.data.token;

      localStorage.setItem("authToken", token);
      dispatch(
        login({
          email: email,
          password: password,
        })
      );
      alert("Erfolgreich angemeldet, Sie können nun Meldungen erstellen!");
      navigate("/home");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Falsche Anmeldedaten. Bitte erneut versuchen.");
    } finally {
      setLoading(false); // Set loading state to false after login attempt completes
    }
  };

  return (
    <>
      <Navbar />
      <div className="signin-container">
        <h2>Anmelden</h2>
        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="E-Mail eingeben"
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
            placeholder="Passwort eingeben"
          />
        </div>
        <div>
          <button
            className="btn-signin"
            onClick={handleSignIn}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Anmelden"}{" "}
            {/* Show Spinner component when loading */}
          </button>
          <p className="btn-spread">Noch kein Konto?</p>
          <button className="btn-signin" onClick={handleNavigateToSignUp}>
            Registrieren
          </button>
        </div>
      </div>
    </>
  );
}

export default Signin;
