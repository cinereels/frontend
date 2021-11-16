import React from "react";
import "../../Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { matches } from "./match";

const Home = () => {
  return (
    <>
      <div
        resizeMode={"contain"}
        style={{
          backgroundImage: `url("https://i2-prod.manchestereveningnews.co.uk/sport/football/article20512072.ece/ALTERNATES/s1200/2_munliv.png")`,
          width: "100%",
          height: "500px",
          // marginLeft: "10%",
          // marginRight: "10%",
          marginTop: "20px",
          // borderRadius: "20px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // padding: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "cover",
            padding: "10px",
            width: "300px",
            borderRadius: "30px",
          }}
          className="header"
        >
          <h1>Manchester United </h1>
          <h1>vs</h1>
          <h1>Liverpool</h1>
          Catch the live action between United and Liverpool from Anfield live!
        </div>
        <button
          style={{
            margin: "10px",
            borderRadius: "25px",
            height: "50px",
            width: "150px",
            backgroundColor: "rgb(256, 0, 0, 1)",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "80px"
          }}
        >
          <h3>Watch Live</h3>
        </button>
      </div>
        <FontAwesomeIcon icon="eye-evil" border size="lg" />
      <div className="row">
        <h4>Cricket</h4>
        <div className="row_posters">
          {matches.map((match) => (
            <img className="row_poster" src={match.image} alt={match.name} />
          ))}
        </div>
      </div>
      <div className="row">
        <h4>Cricket</h4>
        <div className="row_posters">
          {matches.map((match) => (
            <img className="row_poster" src={match.image} alt={match.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
