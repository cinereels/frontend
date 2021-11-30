import React from "react";
import "./styles/index.css";

const Notification = ({ title, imageUrl, imdb, rt }) => {
  return (
    <div className="notification-component">
      <img src={imageUrl} alt={title} className="notification-image" />
      <div className="rating-content">
        <p className="notification-title">
          {title}
        </p>
        <div className="ratings">
          <div>imdb - {imdb}</div>
          <div>rotten-tomatoes - {rt}</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
