import React from "react";
import Language from "../language";
import "./styles/index.css";

const SettingQuality = () => {
  return (
    <div className="language-setting-container">
      <Language language="2160p" />
      <Language language="1440p" />
      <Language language="1080p" />
      <Language language="720p" />
      <Language language="480p" />
      <Language language="360p" />
    </div>
  );
};

export default SettingQuality;
