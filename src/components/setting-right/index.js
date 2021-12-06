import React from "react";
import LanguageContainer from "../language-setting";
import SettingQuality from "../setting-quality";
import SettingVolume from "../setting-volume";
import FeaturedButton from "../featured-button";
import "./styles/index.css";

const SettingRight = ({ settingValue }) => {
  return (
    <div className="setting-right-wrapper">
      <div className="setting-right-container">
        {settingValue === "3" ? (
          <SettingQuality />
        ) : settingValue === "2" ? (
          <SettingVolume />
        ) : (
          <LanguageContainer />
        )}
      </div>
      <div className="btn-done">
        <FeaturedButton block>Done</FeaturedButton>
      </div>
    </div>
  );
};

export default SettingRight;
