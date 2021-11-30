import React from "react";
import Navbar from "../../components/navbar";
import "./styles/index.css";

import photo1 from "../../images/mh.jpeg";
import photo2 from "../../images/GOT.jpeg";
import photo3 from "../../images/photo.jpeg";
import photo4 from "../../images/squid.jpeg";

const Home = () => {
  const description = `Squid Game (Korean: 오징어 게임; RR: Ojing-eo Geim) is a South Korean survival drama streaming television series created by Hwang Dong-hyuk for Netflix. Its cast includes Lee Jung-jae, Park Hae-soo, Wi Ha-joon, Jung Ho-yeon, O Yeong-su, Heo Sung-tae, Anupam Tripathi, and Kim Joo-ryoung.`;

  return (
    <>
      <div className="container-home">
        <div className="container-overlay">
          <div className="side-home">
            <div className="title-home">Squid Game</div>
            <p className="description-home">
              {description}
            </p>
          </div>
          <div className="rating-home">
            <div className="imdb">IMDB - 8.1</div>
            <div className="rt">ROTTEN TOMATOES - 94%</div>
          </div>
          <div className="btns">
            <button className="btn-play">Play</button>
            <button className="btn-visit">Visit</button>
          </div>
        </div>
      </div>
      <div className="recent-activity">
        Your Recent Activity
        <div className="activity">
          <img src={photo1} alt="Money Heist" className="img1" />
          <img src={photo2} alt="Money Heist" className="img1" />
          <img src={photo3} alt="Money Heist" className="img1" />
        </div>
      </div>
      <div className="recent-activity">
        Latest Releases
        <div className="releases">
          <div className="img2" style={{ backgroundImage: `url(${photo4})` }}>
            Squid Game
          </div>
          <div className="img2" style={{ backgroundImage: `url(${photo1})` }}>
            Money Heist
          </div>
          <div className="img2" style={{ backgroundImage: `url(${photo2})` }}>
            Game of Thrones
          </div>
          <div className="img2" style={{ backgroundImage: `url(${photo3})` }}>
            Dark
          </div>
          <div className="img2" style={{ backgroundImage: `url(${photo4})` }}>
            Squid Game
          </div>
          <div className="img2" style={{ backgroundImage: `url(${photo1})` }}>
            Money Heist
          </div>
          <div className="img2" style={{ backgroundImage: `url(${photo2})` }}>
            Game of Thrones
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
