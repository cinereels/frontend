import React, { useRef } from "react";
import "./styles/index.css";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const VideoComponent = () => {
  const videoElement = useRef(null);
  const {
    isPlaying,
    progress,
    isMuted,
    speed,
    toggleMute,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
  } = useVideoPlayer(videoElement);

  const handle = useFullScreenHandle();
  const playerRef = useRef(0);

  const toggleFullScreen = () => {
    if (playerRef.current == 0) {
      handle.enter();
      playerRef.current = 1;
    } else {
      handle.exit();
      playerRef.current = 0;
    }
  };

  return (
    <div className="container">
      <FullScreen handle={handle} className="video-wrapper">
        <video
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!isPlaying ? (
                <FontAwesomeIcon icon="play" />
              ) : (
                <FontAwesomeIcon icon="pause" />
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!isMuted ? (
              <FontAwesomeIcon icon="volume-mute" />
            ) : (
              <FontAwesomeIcon icon="volume-up" />
            )}
          </button>
          <button className="full-screen" onClick={toggleFullScreen}>
            <FontAwesomeIcon icon="expand" />
          </button>
        </div>
      </FullScreen>
    </div>
  );
};

export default VideoComponent;
