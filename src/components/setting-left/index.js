import React from "react";
import SettingButton from "../setting-button";
import "./styles/index.css";

const SettingLeft = () => {
  return (
    <div>
      <div className="setting-left-container">
        <SettingButton title="Language" value="English" />
      </div>
    </div>
  );
};

export default SettingLeft;
