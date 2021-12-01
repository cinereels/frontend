import React from "react";
import "./styles/index.css";

const ListTile = ({ title, imageUrl, imdb, rt }) => {
  return (
    <div className="list-tile-component">
      <img src={imageUrl} alt={title} className="list-tile-image" />
      <div className="rating-content">
        <p className="list-tile-title">
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

export default ListTile;
