import React from "react";
import Home from "./pages/home";
import "./App.css";
import MyNav from "./components/navbar";
import VideoComponent from "./pages/video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPause, faPlay, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPause, faPlay, faVolumeMute, faVolumeUp);

function App() {
  return (
    <>
      {/* <MyNav /> */}
      {/* <Home /> */}
      <VideoComponent />
    </>
  );
}

export default App;
