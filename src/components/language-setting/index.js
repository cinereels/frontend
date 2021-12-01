import React from "react";
import "./styles/index.css";
import Language from "../language";

const LanguageContainer = () => {
  return (
    <div className="language-setting-container">
      <Language language="English" />
      <Language language="Hindi" />
      <Language language="Spanish" />
      <Language language="French" />
      <Language language="German" />
      <Language language="Italian" />
      <Language language="Russian" />
    </div>
  );
};

export default LanguageContainer;
