import React, { useState } from "react";
import "./styles/index.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SettingVolume = () => {
  const [volume, setVolume] = useState(3);
  return (
    <div className="setting-volume">
      <p>Sound</p>
      <Slider
        min={0}
        max={5}
        value={volume}
        onChange={setVolume}
        railStyle={{
          height: 1,
        }}
        handleStyle={{
          height: 28,
          width: 28,
            marginLeft: -14,
            marginTop: -14,
          backgroundColor: "red",
          border: 0,
        }}
        trackStyle={{
          height: 1,
          backgroundColor: 'red',
          color: "red"
        }}
      />
      <p>Level - {volume}</p>
    </div>
  );
};

export default SettingVolume;
