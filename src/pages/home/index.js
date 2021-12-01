import React from "react";
import "./styles/index.css";

import Navbar from "../../components/navbar";
import ShowCard from "../../components/show-card";
import ShowList from "../../components/show-list";

import photo1 from "../../images/mh.jpeg";
import photo2 from "../../images/GOT.jpeg";
import photo3 from "../../images/photo.jpeg";
import photo4 from "../../images/squid.jpeg";
import Theme from "../../components/theme";

const Home = () => {
  const theme = {
    title: 'Squid Game',
    image: photo4,
    description: `Squid Game (Korean: 오징어 게임; RR: Ojing-eo Geim) is a South Korean survival drama streaming television series created by Hwang Dong-hyuk for Netflix. Its cast includes Lee Jung-jae, Park Hae-soo, Wi Ha-joon, Jung Ho-yeon, O Yeong-su, Heo Sung-tae, Anupam Tripathi, and Kim Joo-ryoung.`,
    imdb: '8.1',
    rt: '94%',
  };


  const recentActivity = [
    {
      id: 'ra1',
      name: 'Money Heist',
      image: photo1,
    },
    {
      id: 'ra2',
      name: 'Game Of Thrones',
      image: photo2,
    },
    {
      id: 'ra3',
      name: 'Dark',
      image: photo3,
    },
  ];

  const latestReleases = [
    {
      id: 'lr1',
      name: 'Squid Game',
      image: photo4,
    },
    {
      id: 'lr2',
      name: 'Money Heist',
      image: photo1,
    },
    {
      id: 'lr3',
      name: 'Game Of Thrones',
      image: photo2,
    },
    {
      id: 'lr4',
      name: 'Dark',
      image: photo3,
    },
    {
      id: 'lr5',
      name: 'Game Of Thrones',
      image: photo2,
    },
    {
      id: 'lr6',
      name: 'Squid Game',
      image: photo4,
    },
  ];

  return (
    <>
      <Theme
        title={theme.title}
        description={theme.description}
        image={theme.image}
        imdb={theme.imdb}
        rt={theme.rt}
        type={'home'}
      />
      <div className="recent-activity">
        <ShowList legend={'Your Recent Activity'} list={recentActivity} type={'circle'} />
      </div>
      <div className="recent-activity">
        <ShowList legend={'Latest Releases'} list={latestReleases} />
      </div>
    </>
  );
};

export default Home;
