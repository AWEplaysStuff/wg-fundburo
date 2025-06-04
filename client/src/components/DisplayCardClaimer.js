import React from "react";

const DisplayCardClaimer = ({ claimant, number }) => {
  const {
    itemdetails,
    claimantname,
    mobilenumber,
    hostelname,
    proofofclaim,
    date,
  } = claimant;

  const cardStyle = {
    backgroundColor: "#e6f7ff",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={cardStyle}>
      <h2>Details des Abholers:</h2>
      <h2>Nr. {number}</h2>
      <p>
        <strong>Name des Abholers:</strong> {claimantname}
      </p>
      <p>
        <strong>Beanspruchter Gegenstand:</strong> {itemdetails}
      </p>
      <p>
        <strong>Handynummer:</strong> {mobilenumber}
      </p>
      <p>
        <strong>Ort:</strong> {hostelname}
      </p>
      <p>
        <strong>Nachweis:</strong> {proofofclaim}
      </p>
      <p>
        <strong>Datum:</strong> {new Date(date).toLocaleString()}
      </p>
    </div>
  );
};

export default DisplayCardClaimer;
