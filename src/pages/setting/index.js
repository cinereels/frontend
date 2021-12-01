import React from "react";
import "./styles/index.css";
import SettingLeft from "../../components/setting-left";
import SettingRight from "../../components/setting-right";

const SettingPage = () => {
  return (
    <div className="setting-outer-container">
      <SettingLeft />
      <SettingRight />
    </div>
  );
};

export default SettingPage;
