import React from "react";
import "./App.css";
import Guest from "./pages/guest";
import VideoComponent from "./pages/video";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./pages/home";
import {
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
  faExpand,
  faSearch,
  faFilm,
  faBell,
  faCog,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import NotificationPage from "./pages/NotificationPage";

library.add(
  fab,
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
  faExpand,
  faSearch,
  faFilm,
  faHome,
  faBell,
  faCog
);

function App() {
  return (
    <div style={{ backgroundColor: "#282828", minHeight: "100vh", backgroundSize: 'cover' }}>
      {/* <MyNav /> */}
      {/* <Home />a */}
      {/* <VideoComponent /> */}
      {/* <Guest /> */}
      <NotificationPage />
    </div>
  );
}

export default App;
