import React from "react";
import "../../Home.css";

const Home = () => {
  const matches = [
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
    {
      name: "India vs New Zealand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLRWPMLXJljsnAPoWl9KcIP6zQCaGNgSktg&usqp=CAU",
    },
  ];
  return (
    <>
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
