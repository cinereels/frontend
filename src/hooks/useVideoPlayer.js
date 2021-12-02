import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const newProgress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setProgress(newProgress);
  };

  const handleVideoProgress = (manualChange) => {
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setProgress(manualChange);
  };

  const handleVideoSpeed = (event) => {
    const newSpeed = Number(event.target.value);
    videoElement.current.playbackRate = newSpeed;
    setSpeed(newSpeed);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  useEffect(() => {
    isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [isMuted, videoElement]);
  const skipForward = () => {
    if (videoElement.current.currentTime + 10 <= videoElement.current.duration) {
      videoElement.current.currentTime += 10;
    } else {
      videoElement.current.currentTime = videoElement.current.duration;
    }
  };

  const skipBackward = () => {
    if (videoElement.current.currentTime - 10 >= 0) {
      videoElement.current.currentTime -= 10;
    } else {
      videoElement.current.currentTime = 0;
    }
  };

  return {
    isPlaying,
    progress,
    isMuted,
    speed,
    toggleMute,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    skipForward,
    skipBackward
  };
};

export default useVideoPlayer;
