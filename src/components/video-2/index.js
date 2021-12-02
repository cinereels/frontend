import React, { useState } from "react";
import {
  Container,
  Video as Vdo,
  Header,
  Nav,
  Action,
  Bar,
  Caption,
  Control,
  Juice,
  Label,
  Lower,
  Options,
  Pointer,
  Section,
  Timer,
  Title,
  Upper,
} from "./styles/index.js";
import {
  IoPauseSharp,
  IoPlaySharp,
  IoPlaySkipForwardSharp,
  IoPlaySkipBackSharp,
} from "react-icons/io5";
import {
  FiRotateCw,
  FiRotateCcw,
  FiArrowLeft,
  FiSettings,
  FiMoreHorizontal,
} from "react-icons/fi";
import { BiCaptions } from "react-icons/bi";

const Video = ({ children, bg, ...restProps }) => {
  return (
    <Container bg={bg} {...restProps}>
      {children}
    </Container>
  );
};

const VdoComponent = ({
  children,
  videoRef,
  poster,
  src,
  updateTime,
  ...restProps
}) => {
  return (
    <Vdo
      ref={videoRef}
      poster={poster}
      onTimeUpdate={({ timeStamp }) => updateTime(timeStamp)}
      {...restProps}
    >
      <source src={src} />
      {children}
    </Vdo>
  );
};

Video.Vdo = VdoComponent;

Video.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Video.Nav = ({ children, goBack, ...restProps }) => {
  return (
    <Nav {...restProps}>
      <FiArrowLeft size={30} color={"#fff"} onClick={goBack} />
      {children}
    </Nav>
  );
};

Video.Caption = ({ children, ...restProps }) => {
  return <Caption {...restProps}>{children}</Caption>;
};

Video.Options = ({ children, ...restProps }) => {
  return (
    <Options {...restProps}>
      {children}
      <BiCaptions size={30} color={"#fff"} />
      <FiSettings size={30} color={"#fff"} />
      <FiMoreHorizontal size={30} color={"#fff"} />
    </Options>
  );
};

Video.Control = ({ children, ...restProps }) => {
  return <Control {...restProps}>{children}</Control>;
};

Video.Upper = ({ children, ...restProps }) => {
  return <Upper {...restProps}>{children}</Upper>;
};

Video.Bar = ({ videoRef, ...restProps }) => {
  const { currentTime, duration } = videoRef.current;

  const percentageTime = () => {
    if (currentTime === 0) {
      return 0;
    }

    if (currentTime >= duration) {
      return 100;
    }
    return (currentTime / duration) * 100;
  };

  return (
    <Bar {...restProps}>
      <Juice width={percentageTime()}>
        <Pointer />
      </Juice>
    </Bar>
  );
};

Video.Lower = ({ children, ...restProps }) => {
  return <Lower {...restProps}>{children}</Lower>;
};

Video.Section = ({ children, ...restProps }) => {
  return <Section {...restProps}>{children}</Section>;
};

Video.Label = ({ season, episode, ...restProps }) => {
  const getLabel = (num) => {
    if (num < 9) {
      return "0" + num;
    } else {
      return num;
    }
  };

  return (
    <Label {...restProps}>
      S{getLabel(season)}E{getLabel(episode)}:
    </Label>
  );
};

Video.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const ActionComponent = ({ children, videoRef, ...restProps }) => {
  const [play, setPlay] = useState();
  const { duration } = videoRef.current;

  const togglePlay = (event, keypress = false) => {
    console.log("code", event.charCode);
    if (keypress) {
      if (event.charCode === 13) {
        if (play) {
          setPlay(false);
          videoRef.current.pause();
        } else {
          setPlay(true);
          videoRef.current.play();
        }
      }
    } else {
      if (play) {
        setPlay(false);
        videoRef.current.pause();
      } else {
        setPlay(true);
        videoRef.current.play();
      }
    }
  };

  const skipForward = () => {
    if (videoRef.current.currentTime + 10 <= duration) {
      videoRef.current.currentTime += 10;
    } else {
      videoRef.current.currentTime = duration;
    }
  };

  const skipBackward = () => {
    if (videoRef.current.currentTime - 10 >= 0) {
      videoRef.current.currentTime -= 10;
    } else {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Action>
      <IoPlaySkipBackSharp size={30} color={"#fff"} />
      <FiRotateCcw size={30} color={"#fff"} onClick={skipBackward} />
      {play ? (
        <IoPauseSharp size={30} onClick={togglePlay} color={"#fff"} />
      ) : (
        <IoPlaySharp size={30} onClick={togglePlay} color={"#fff"} />
      )}
      <FiRotateCw size={30} color={"#fff"} onClick={skipForward} />
      <IoPlaySkipForwardSharp size={30} color={"#fff"} />
    </Action>
  );
};

Video.Action = ActionComponent;

Video.Timer = ({ children, videoRef, ...restProps }) => {
  const { currentTime, duration } = videoRef.current;

  const pad = (num) => {
    return ("0" + num).slice(-2);
  };

  const hhmmss = (secs) => {
    secs = Math.floor(secs);
    let minutes = Math.floor(secs / 60);
    secs = secs % 60;
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    if (hours === 0) {
      return `${pad(minutes)}:${pad(secs)}`;
    }
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    // return pad(hours)+":"+pad(minutes)+":"+pad(secs); for old browsers
  };

  return (
    <Timer {...restProps}>
      {hhmmss(currentTime)} / {hhmmss(duration)}
    </Timer>
  );
};

export default Video;
