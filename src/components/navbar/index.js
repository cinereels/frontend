import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/index.css";
import Brand from "../brand";

const MyNav = () => {
  return (
    <div className="navbar">
      <div style={{ width: 30 }} />
      <Brand />
      <div style={{ flex: 1 }} />
      <div className="options">
        <FontAwesomeIcon icon="home" size="lg" color="red" />
        <FontAwesomeIcon icon="search" size="lg" />
        <FontAwesomeIcon icon="film" size="lg" />
        <FontAwesomeIcon icon="bell" size="lg" />
        <FontAwesomeIcon icon="cog" size="lg" />
        <button className="btn-navbar">M</button>
      </div>
    </div>
  );
};

export default MyNav;
