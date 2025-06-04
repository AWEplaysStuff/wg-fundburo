import React from "react";

const DisplayCardHelper = ({ helper, number }) => {
  const { itemdetails, helpername, mobilenumber, hostelname, date } = helper;

  const cardStyle = {
    backgroundColor: "#e6f7ff",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={cardStyle}>
      <h2>Details des Helfers:</h2>
      <h2>Nr. {number}</h2>
      <p>
        <strong>Gegenstand unterstützt:</strong> {itemdetails}
      </p>
      <p>
        <strong>Name des Helfers:</strong> {helpername}
      </p>
      <p>
        <strong>Handynummer:</strong> {mobilenumber}
      </p>
      <p>
        <strong>Ort:</strong> {hostelname}
      </p>
      <p>
        <strong>Datum:</strong> {new Date(date).toLocaleString()}
      </p>
    </div>
  );
};

export default DisplayCardHelper;
