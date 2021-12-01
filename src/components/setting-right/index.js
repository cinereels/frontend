import React from "react";
import LanguageContainer from "../language-setting";
import "./styles/index.css";

const SettingRight = () => {
  return (
    <div className="setting-right-container">
      <LanguageContainer />
      <button className="btn-done">Done</button>
    </div>
  );
};

export default SettingRight;
