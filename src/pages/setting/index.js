import React, { useState } from "react";
import "./styles/index.css";
import SettingLeft from "../../components/setting-left";
import SettingRight from "../../components/setting-right";

const SettingPage = () => {
  const [settingValue, setSettingValue] = useState("1");

  return (
    <div className="setting-outer-container">
      <SettingLeft settingValue={settingValue} handler={setSettingValue} />
      <SettingRight settingValue={settingValue} handler={setSettingValue} />
    </div>
  );
};

export default SettingPage;
