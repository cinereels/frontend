import React from "react";
import "./styles/index.css";

const Language = ({ language }) => {
  return (
    <div className="language-container">
      <p>{language}</p>
    </div>
  );
};

export default Language;
