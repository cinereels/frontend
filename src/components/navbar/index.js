import React from "react";
import "./styles/index.css";
import Brand from "../brand";
import { BiHomeAlt, BiVideo, BiSearch, BiFilm, BiBell, BiCog, BiUser } from 'react-icons/bi';
import theme from "../../styles/theme";
import { NavLink, useLocation } from 'react-router-dom';
import Spacer from "../spacer";
import { useSelector } from "react-redux";

const MyNav = () => {
  const location = useLocation();
  
  const isAdmin = useSelector(state => state.ath.isAdmin);

  const iconColor = theme.white;
  const activeIconColor = theme.primary;

  const iconSize = 25;

  return (
    <div className="navbar">
        <div style={{ width: 30 }} />
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <Spacer type={'vertical'} size={10} />
          <Brand />
        </NavLink>
        <div style={{ flex: 1 }} />
        <div className="options">
          <NavLink to='/'>
            <BiHomeAlt color={location.pathname === '/' ? activeIconColor : iconColor} size={iconSize} />
          </NavLink>
          <NavLink to='/player'>
            <BiVideo color={location.pathname === '/player' ? activeIconColor : iconColor} size={iconSize} />
          </NavLink>
          <NavLink to='/search'>
            <BiSearch color={location.pathname === '/search' ? activeIconColor : iconColor} size={iconSize} />
          </NavLink>
          <NavLink to='/top-charts'>
            <BiFilm color={location.pathname === '/top-charts' ? activeIconColor : iconColor} size={iconSize} />
          </NavLink>
          {isAdmin && <NavLink to='/admin'>
            <BiUser color={location.pathname === '/admin' ? activeIconColor : iconColor} size={iconSize} />
          </NavLink>}
          <NavLink to='/notifications'>
            <BiBell color={location.pathname === '/notifications' ? activeIconColor : iconColor} size={iconSize} />
          </NavLink>
          <NavLink to='/settings'>
            <BiCog color={location.pathname === '/settings' ? activeIconColor : iconColor} size={iconSize} />
          </NavLink>
          <button className="btn-navbar">M</button>
        </div>
    </div>
  );
};

export default MyNav;
