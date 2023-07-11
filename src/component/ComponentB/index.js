import React from "react";
import './index.css';

const ComponentB = ({ name, onClick }) => {
  const capitalizedWord = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <li className="card" onClick={onClick}>
      <h1>{capitalizedWord} <br/> <span className="descrip">Unlimited Jokes On {name}</span></h1>
    </li>
  );
};

export default ComponentB;
