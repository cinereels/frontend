import React from "react";
import "./styles/index.css";
import Navbar from "../../components/navbar";
import photo1 from "../../images/mh.jpeg";
import photo2 from "../../images/GOT.jpeg";
import photo3 from "../../images/photo.jpeg";
import photo4 from "../../images/squid.jpeg";
import Notification from "../../components/Notification";

const NotificationPage = () => {
  return (
    <div>
      <Navbar />
      <div className="notification-container">
        <div style={{ fontSize: "larger", marginBottom: "30px" }}>
          Notifications
        </div>
        <Notification
          imageUrl={photo4}
          title="Squid Game Released"
          imdb="8.1"
          rt="94%"
        />
        <Notification
          imageUrl={photo1}
          title="Money Heist Released"
          imdb="8.1"
          rt="94%"
        />
        <Notification
          imageUrl={photo2}
          title="Game of Thrones Released"
          imdb="9.2"
          rt="89%"
        />
        <Notification
          imageUrl={photo3}
          title="Dark Released"
          imdb="8.8"
          rt="95%"
        />
      </div>
    </div>
  );
};

export default NotificationPage;
