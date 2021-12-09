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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchChannels } from "../../store/actions";
import Spacer from "../../components/spacer";

const Home = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.ath.token);
  const movies = useSelector(state => state.mov.movies);
  const channels = useSelector(state => state.chn.channels);

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
      gallery: [{
        id: 'lr1g1',
        imageUrl: photo4,
        caption: 'squid game',
        type: 'image',
      }]
      // image: photo4,
    },
    {
      id: 'lr2',
      name: 'Money Heist',
      // image: photo1,
      gallery: [{
        id: 'lr2g1',
        imageUrl: photo1,
        caption: 'money heist',
        type: 'image',
      }]
    },
    {
      id: 'lr3',
      name: 'Game Of Thrones',
      // image: photo2,
      gallery: [{
        id: 'lr3g1',
        imageUrl: photo2,
        caption: 'game of thrones',
        type: 'image',
      }]
    },
    {
      id: 'lr4',
      name: 'Dark',
      // image: photo3,
      gallery: [{
        id: 'lr4g1',
        imageUrl: photo3,
        caption: 'dark',
        type: 'image',
      }]
    },
    {
      id: 'lr5',
      name: 'Game Of Thrones',
      // image: photo2,
      gallery: [{
        id: 'lr5g1',
        imageUrl: photo2,
        caption: 'game of thrones',
        type: 'image',
      }]
    },
    {
      id: 'lr6',
      name: 'Squid Game',
      // image: photo4,
      gallery: [{
        id: 'lr6g1',
        imageUrl: photo4,
        caption: 'squid game',
        type: 'image',
      }]
    },
  ];


  useEffect(() => {
    dispatch(fetchMovies(token))
      .then(result => {
        return dispatch(fetchChannels(token));
      })
      .then(result => {
        // loaded
      })
      .catch(err => {
        console.log(err);
      });
  }, [token, dispatch]);

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
      <Spacer type={'vertical'} size={20} />
      <ShowList legend={'Your Recent Activity'} list={recentActivity} type={'circle'} />
      <ShowList legend={'Latest Releases'} list={latestReleases} />
      <div className="recent-activity">
      </div>
      {movies.length > 0 && <ShowList legend={'Movies'} list={movies} /> }
      {channels.length > 0 && <ShowList legend={'Channels'} list={channels} /> }
    </>
  );
};

export default Home;
