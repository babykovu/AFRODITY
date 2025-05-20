import React from "react";

const Card = ({ title, text, cta }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{text}</p>
    {cta && <a href="#" className="cta">{cta}</a>}
  </div>
);

export default Card;
