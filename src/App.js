import React from "react";
import "./App.css";
import Guest from './pages/guest';
import VideoComponent from "./pages/video";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
  faExpand
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPause, faPlay, faVolumeMute, faVolumeUp, faExpand);

function App() {
  return (
    <>
      {/* <MyNav /> */}
      {/* <Home /> */}
      {/* <VideoComponent /> */}
      <Guest />
    </>
  );
}

export default App;
