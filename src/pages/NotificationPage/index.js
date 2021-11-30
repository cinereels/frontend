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
    <>
      <Navbar />
      <div className="notification-container">
        <div style={{fontSize: "larger"}}>Notifications</div>
        <Notification
          imageUrl={photo4}
          title="Squid Game Released"
          imdb="8.1"
          rt="94%"
        />
      </div>
    </>
  );
};

export default NotificationPage;
