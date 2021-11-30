import React from "react";
import "./styles/index.css";

const Notification = ({ title, imageUrl, imdb, rt }) => {
  return (
    <div className="notification-component">
      <img src={imageUrl} alt={title} style={{ borderRadius: "3px" }} />
      <div className="rating-content">
        {title}
        <div className="ratings">
          <div>imdb - {imdb}</div>
          <div>rotten-tomatoes - {rt}</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
