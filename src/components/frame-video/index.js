import React, { useRef, useState, useImperativeHandle, forwardRef } from "react";
import "./styles/index.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FrameComponent = ({ title, videoUrl }) => {
  const videoElement = useRef({
    currentTime: 0,
    duration: 0,
    play: () => {},
    pause: () => {},
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
    if (playerRef.current === 0) {
      handle.enter();
      playerRef.current = 1;
    } else {
      handle.exit();
      playerRef.current = 0;
    }
  };

  const [display, setDisplay] = useState(false);

  const setMouseMove = (e) => {
    e.preventDefault();
    if (display === true) {
      return;
    }

    setDisplay(true);

    let timeout;
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setDisplay(false), 5000);
    })();
  };

  const scrollButtonStyle = {
    visibility: display ? "visible" : "hidden",
  };

  const fontStyleCustom = {
    fontSize: handle.active ? "40px" : "20px",
    color: "red",
  };

  const Iframe = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      play: () => {},
      pause: () => {},
    }));
    return <iframe title="Cricket Match" {...props} ref={ref} />;
  });

  return (
    <div
    
      className="container-video"
      onMouseMove={setMouseMove}
      style={{ color: "white", width: "800px", height: "600px" }}
      onDoubleClick={toggleFullScreen}
      onKeyPress={(e) => {
        if (e.key === "f") {
          toggleFullScreen();
        }
      }}
    >
      <FullScreen handle={handle} className="video-wrapper">
        <Iframe
        width="800px"
        height="600px"
          title="match"
          src={videoUrl}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        >
        <div className="controls" style={scrollButtonStyle}>
          <div className="btn-grp">
            <div className="video-title" style={fontStyleCustom}>
              {title}
            </div>
            <button className="full-screen">
              <FontAwesomeIcon
                icon="closed-captioning"
                size={handle.active === false ? "1x" : "2x"}
                color="white"
              />
            </button>
            <button className="full-screen">
              <FontAwesomeIcon
                icon="cog"
                size={handle.active === false ? "1x" : "2x"}
                color="white"
              />
            </button>
            <button className="full-screen" onClick={toggleMute}>
              {!isMuted ? (
                <FontAwesomeIcon
                  icon="volume-mute"
                  size={handle.active === false ? "1x" : "2x"}
                  color="white"
                />
              ) : (
                <FontAwesomeIcon
                  icon="volume-up"
                  size={handle.active === false ? "1x" : "2x"}
                  color="white"
                />
              )}
            </button>
            <button className="full-screen" onClick={toggleFullScreen}>
              {handle.active === false ? (
                <FontAwesomeIcon
                  icon="expand"
                  size={handle.active === false ? "1x" : "2x"}
                  color="white"
                />
              ) : (
                <FontAwesomeIcon
                  icon="compress"
                  size={handle.active === false ? "1x" : "2x"}
                  color="white"
                />
              )}
            </button>
          </div>
          <div className="actions">
            <div>
              <button onClick={skipBackward}>
                <FontAwesomeIcon
                  icon="backward"
                  size={handle.active === false ? "2x" : "4x"}
                  color="rgba(255, 255, 255, 0.6)"
                />
              </button>
            </div>
            <div>
              <button onClick={togglePlay}>
                {!isPlaying ? (
                  <FontAwesomeIcon
                    icon="play"
                    size={handle.active === false ? "3x" : "6x"}
                    // color="rgba(0, 0, 0, 0.5)"
                    color="white"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="pause"
                    size={handle.active === false ? "3x" : "6x"}
                    // color="rgba(0, 0, 0, 0.5)"
                    color="white"
                  />
                )}
              </button>
            </div>
            <div>
              <button onClick={skipForward}>
                <FontAwesomeIcon
                  icon="forward"
                  size={handle.active === false ? "2x" : "4x"}
                  color="rgba(255, 255, 255, 0.6)"
                />
              </button>
            </div>
          </div>
          <div
            style={{
              marginBottom: "0%",
              width: handle.active === false ? "600px" : "1200px",
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
        </Iframe>
      </FullScreen>
    </div>
  );
};

export default FrameComponent;
