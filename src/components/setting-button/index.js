import React from "react";
import "./styles/index.css";

const SettingButton = ({ title, value }) => {
  return (
    <button className="setting-button-container">
      <p>{title}</p>
      <p style={{ color: "red" }}>{value}</p>
    </button>
  );
};

export default SettingButton;
