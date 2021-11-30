import React from "react";
import Card from "../../components/card";
import "./styles/index.css";
import bg1 from "../../images/Football.jpeg";
import bg2 from "../../images/GOT.jpeg";
import bg3 from "../../images/TV.jpeg";

const Guest = () => {
  return (
    <div className="outer-container">
      <div className="btn-div">
        <button className="btn">Login</button>
      </div>
      <p style={{ fontSize: "50px" }}>CINEREELS</p>
      <div className="container">
        <Card imageUrl={bg1} title="Live Action" />
        <div style={{ marginBottom: "100px" }}>
          <Card imageUrl={bg2} title="Unlimited Entertainment" />
        </div>
        <Card imageUrl={bg3} title="No subscription required" />
      </div>
      <div className="btn-div1">
        <button className="btn1">Join Today</button>
      </div>
    </div>
  );
};

export default Guest;
