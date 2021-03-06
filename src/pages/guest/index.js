import React from "react";
import Card from "../../components/card";
import "./styles/index.css";
import bg1 from "../../images/Football.jpeg";
import bg2 from "../../images/GOT.jpeg";
import bg3 from "../../images/TV.jpeg";
import Brand from "../../components/brand";
import Spacer from "../../components/spacer";
import { useHistory } from 'react-router-dom';

const Guest = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push('/auth');
  };

  return (
    <div className="outer-container">
      <div className="outer-container-overlay">
        <div className="btn-div">
          <button className="btn" onClick={goToLogin}>Login</button>
        </div>
        <div className="inner-container">
          <Spacer type={'vertical'} size={50} />
          <Brand size={50} />
          <div className="container">
            <Card imageUrl={bg1} title="Live Action" />
            <div style={{ marginBottom: "100px" }}>
              <Card imageUrl={bg2} title="Unlimited Entertainment" />
            </div>
            <Card imageUrl={bg3} title="No subscription required" />
          </div>
          <div className="btn-div1">
            <button className="btn1" onClick={goToLogin}>Join Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
