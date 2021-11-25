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

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
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
  };
};

export default useVideoPlayer;
