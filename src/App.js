import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
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
import CustomThemeProvider from './containers/custom-theme-provider';
import Layout from './containers/layout';
import { BrowserRouter } from "react-router-dom";
import Navigator from "./containers/navigator";

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
    <CustomThemeProvider>
      <BrowserRouter>
        <Layout>
          <Navigator />
        </Layout>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
