import React from "react";
import "./styles/index.css";
import Navbar from "../../components/navbar";
import photo1 from "../../images/mh.jpeg";
import photo2 from "../../images/GOT.jpeg";
import photo3 from "../../images/photo.jpeg";
import photo4 from "../../images/squid.jpeg";
import ListTile from "../../components/list-tile";
import Spacer from "../../components/spacer";

const NotificationPage = () => {
  return (
    <div className="notification-container">
      <div style={{ fontSize: "larger" }}>Notifications</div>
      <Spacer type={'vertical'} size={20} />
      <ListTile
        imageUrl={photo4}
        title="Squid Game Released"
        imdb="8.1"
        rt="94%"
      />
    </div>
  );
};

export default NotificationPage;
