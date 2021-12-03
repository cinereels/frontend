import React from "react";
import VideoComponent from "../../components/video/index.js";

const PlayerPage = () => {
  return (
    <VideoComponent
      title="Sintel"
      videoUrl="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};

export default PlayerPage;
