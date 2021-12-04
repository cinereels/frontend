import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import "./styles/index.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import Iframe from 'react-iframe';

  
const Iframe = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    play: () => { },
    pause: () => { },
  }));
  return <iframe title="Cricket Match" {...props} ref={ref} />
});


const VideoComponent = ({ src }) => {
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
    if (playerRef.current === 0) {
      handle.enter();
      playerRef.current = 1;
    } else {
      handle.exit();
      playerRef.current = 0;
    }
  };

  const [display, setDisplay] = useState(true);
  
  const setMouseMove = (e) => {
    e.preventDefault();
    setDisplay(true);
    let timeout;
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setDisplay(false), 3000);
    })();
  };

   const scrollButtonStyle = {
     visibility: display ? "visible" : "hidden",
   };

  return (
    <div className="video-container" onMouseMove={setMouseMove} onDoubleClick={toggleFullScreen}>
      <FullScreen handle={handle} className="video-wrapper">
        <video
          src={src}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          id="Frame"
        />
        <div className="controls" style={scrollButtonStyle}>
          <div className="btn-grp">
            <button className="full-screen">
              <FontAwesomeIcon
                icon="closed-captioning"
                size={handle.active === false ? "1x" : "2x"}
                color="rgba(255, 255, 255)"
                onMouseOver={() => setDisplay(true)}
              />
            </button>
            <button className="full-screen">
              <FontAwesomeIcon
                icon="cog"
                size={handle.active === false ? "1x" : "2x"}
                color="rgba(255, 255, 255)"
                onMouseOver={() => setDisplay(true)}
              />
            </button>
            <button className="full-screen" onClick={toggleMute}>
              {!isMuted ? (
                <FontAwesomeIcon
                  icon="volume-mute"
                  size={handle.active === false ? "1x" : "2x"}
                  color="rgba(255, 255, 255)"
                  onMouseOver={() => setDisplay(true)}
                />
              ) : (
                <FontAwesomeIcon
                  icon="volume-up"
                  size={handle.active === false ? "1x" : "2x"}
                    color="rgba(255, 255, 255)"
                    onMouseOver={() => setDisplay(true)}
                />
              )}
            </button>
            <button className="full-screen" onClick={toggleFullScreen}>
              {handle.active === false ? (
                <FontAwesomeIcon
                  icon="expand"
                  size={handle.active === false ? "1x" : "2x"}
                  color="rgba(255, 255, 255)"
                  onMouseOver={() => setDisplay(true)}
                />
              ) : (
                <FontAwesomeIcon
                  icon="compress"
                  size={handle.active === false ? "1x" : "2x"}
                    color="rgba(255, 255, 255)"
                    onMouseOver={() => setDisplay(true)}
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
                  color="rgba(255, 255, 255)"
                  onMouseOver={() => setDisplay(true)}
                />
              </button>
            </div>
            <div>
              <button onClick={togglePlay}>
                {!isPlaying ? (
                  <FontAwesomeIcon
                    icon="play"
                    size={handle.active === false ? "3x" : "6x"}
                    color="rgba(255, 255, 255)"
                    onMouseOver={() => setDisplay(true)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="pause"
                    size={handle.active === false ? "3x" : "6x"}
                    color="rgba(255, 255, 255)"
                    onMouseOver={() => setDisplay(true)}
                  />
                )}
              </button>
            </div>
            <div>
              <button onClick={skipForward}>
                <FontAwesomeIcon
                  icon="forward"
                  size={handle.active === false ? "2x" : "4x"}
                  color="rgba(255, 255, 255)"
                  onMouseOver={() => setDisplay(true)}
                />
              </button>
            </div>
          </div>
          <div
            style={{
              marginBottom: "0%",
              // width: handle.active === false ? "600px" : "1200px",
              width: "95%",
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
