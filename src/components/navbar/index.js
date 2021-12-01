import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/index.css";
import Brand from "../brand";
import { BiHomeAlt, BiSearch, BiFilm, BiBell, BiCog } from 'react-icons/bi';
import theme from "../../styles/theme";
import { Router, NavLink, useLocation } from 'react-router-dom';
import Spacer from "../spacer";

const MyNav = () => {
  const location = useLocation();

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
          <NavLink to='/search'>
            <BiSearch color={location.pathname === '/search' ? activeIconColor : iconColor} size={iconSize} />
          </NavLink>
          <NavLink to='/top-charts'>
            <BiFilm color={location.pathname === '/top-charts' ? activeIconColor : iconColor} size={iconSize} />
          </NavLink>
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
