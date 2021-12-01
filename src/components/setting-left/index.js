import React from "react";
import SettingButton from "../setting-button";
import "./styles/index.css";

const SettingLeft = () => {
  return (
    <div>
      <div className="setting-left-container">
        <SettingButton title="Language" value="English" />
        <SettingButton title="Sound" value="3 level" />
        <SettingButton title="Video quality" value="720p" />
        <SettingButton title="Report" />
        <SettingButton title="Support" />
        <SettingButton title="Help" />
        <SettingButton title="Logout" />
      </div>
    </div>
  );
};

export default SettingLeft;
