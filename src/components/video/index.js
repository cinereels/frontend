import React, { useRef } from "react";
import "./styles/index.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const VideoComponent = () => {
  const videoElement = useRef({
    currentTime: 0,
    duration: 0,
  });
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
    skipBackward,
    skipForward,
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
          <div className="btn-grp">
            <button className="full-screen">
              <FontAwesomeIcon
                icon="closed-captioning"
                size={playerRef.current === 0 ? "1x" : "2x"}
              />
            </button>
            <button className="full-screen">
              <FontAwesomeIcon
                icon="cog"
                size={playerRef.current === 0 ? "1x" : "2x"}
              />
            </button>
            <button className="full-screen" onClick={toggleMute}>
              {!isMuted ? (
                <FontAwesomeIcon
                  icon="volume-mute"
                  size={playerRef.current === 0 ? "1x" : "2x"}
                />
              ) : (
                <FontAwesomeIcon
                  icon="volume-up"
                  size={playerRef.current === 0 ? "1x" : "2x"}
                />
              )}
            </button>
            <button className="full-screen" onClick={toggleFullScreen}>
              {playerRef.current === 0 ? (
                <FontAwesomeIcon
                  icon="expand"
                  size={playerRef.current === 0 ? "1x" : "2x"}
                />
              ) : (
                <FontAwesomeIcon
                  icon="compress"
                  size={playerRef.current === 0 ? "1x" : "2x"}
                />
              )}
            </button>
          </div>
          <div className="actions">
            <div>
              <button onClick={skipBackward}>
                <FontAwesomeIcon
                  icon="backward"
                  size={playerRef.current === 0 ? "2x" : "4x"}
                  color="rgba(0, 0, 0, 0.6)"
                />
              </button>
            </div>
            <div>
              <button onClick={togglePlay}>
                {!isPlaying ? (
                  <FontAwesomeIcon
                    icon="play"
                    size={playerRef.current === 0 ? "3x" : "6x"}
                    // color="rgba(0, 0, 0, 0.5)"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="pause"
                    size={playerRef.current === 0 ? "3x" : "6x"}
                    // color="rgba(0, 0, 0, 0.5)"
                  />
                )}
              </button>
            </div>
            <div>
              <button onClick={skipForward}>
                <FontAwesomeIcon
                  icon="forward"
                  size={playerRef.current === 0 ? "2x" : "4x"}
                  color="rgba(0, 0, 0, 0.6)"
                />
              </button>
            </div>
          </div>
          <div
            style={{
              marginBottom: "0%",
              width: playerRef.current === 0 ? "600px" : "1200px",
            }}
          >
            <Slider
              min={0}
              max={100}
              value={progress}
              onChange={handleVideoProgress}
              railStyle={{
                height: 1,
              }}
              handleStyle={{
                height: 14,
                width: 14,
                marginLeft: -7,
                marginTop: -7,
                backgroundColor: "red",
                border: 0,
              }}
              trackStyle={{
                height: 1,
                backgroundColor: "red",
                color: "red",
              }}
            />
            <div className="time-control">
              <p>
                {Math.floor(videoElement.current.currentTime / 60)}:
                {Math.floor(videoElement.current.currentTime % 60)}
              </p>
              <p>
                {Math.floor(videoElement.current.duration / 60)}:
                {Math.floor(videoElement.current.duration % 60)}
              </p>
            </div>
          </div>
          {/* <select
            className="velocity"
            value={speed}
            onChange={(e) => handleVideoSpeed(e)}
            >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
            </select>
          */}
        </div>
        {console.log(videoElement.current.currentTime)}
      </FullScreen>
    </div>
  );
};

export default VideoComponent;
