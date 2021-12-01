import React from "react";
import "./styles/index.css";

const SettingButton = ({ title, value, settingValue, tab, handler }) => {
  return (
    <button
      className="setting-button-container"
      onClick={() => {
        handler(tab);
      }}
    >
      <p style={{ color: (settingValue == tab) ? 'aqua' : 'white'}}>{title}</p>
      <p style={{ color: "red" }}>{value}</p>
    </button>
  );
};

export default SettingButton;
