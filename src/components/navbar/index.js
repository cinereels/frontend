import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/index.css";

const MyNav = () => {
  return (
    <div className="navbar">
      <p style={{ fontSize: "35px", marginTop: '15px' }}>CINEREELS</p>
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
