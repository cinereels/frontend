import React, { useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const SettingVolume = () => {
  const [volume, setVolume] = useState(50);
  return (
    <div className="setting-volume">
      <Slider
        min={0}
        max={100}
        value={volume}
        onChange={setVolume}
        railStyle={{
          height: 5,
        }}
        handleStyle={{
          height: 28,
          width: 28,
        //   marginLeft: -14,
        //   marginTop: -14,
          backgroundColor: "red",
          border: 0,
        }}
        trackStyle={{
          background: "none",
        }}
      />
    </div>
  );
};

export default SettingVolume;
