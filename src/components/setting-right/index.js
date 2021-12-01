import React from "react";
import LanguageContainer from "../language-setting";
import SettingQuality from "../setting-quality";
import "./styles/index.css";

const SettingRight = ({ settingValue }) => {
  return (
    <div className="setting-right-container">
      {settingValue === "3" ? <SettingQuality /> : <LanguageContainer />}

      <button className="btn-done">Done</button>
    </div>
  );
};

export default SettingRight;
