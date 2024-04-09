import React from "react";

function Card({icon, number, text}) {
  return (
    <div className="card-1">
      <h3>{icon}</h3>
      <h4>{number}</h4>
      <p style={{fontSize:"1.3rem"}}>{text}</p>
    </div>
  );
}

export default Card;
