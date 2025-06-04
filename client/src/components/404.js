import React from "react";
import "./404.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1 className="Error-404">Fehler 404 :(</h1>
        <p className="error-404-content">
          Die Seite konnte nicht gefunden werden.
        </p>
        <NavLink to="/">
          <button className="back-to-home">Zurück zur Startseite</button>
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
