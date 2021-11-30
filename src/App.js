import React from "react";
import Home from "./pages/home";
import "./App.css";
import MyNav from "./components/navbar";
import VideoComponent from "./pages/video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPause, faPlay, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import CustomThemeProvider from './containers/custom-theme-provider';
import Layout from './containers/layout';
import { BrowserRouter } from "react-router-dom";
import Navigator from "./containers/navigator";

library.add(fab, faPause, faPlay, faVolumeMute, faVolumeUp);

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
