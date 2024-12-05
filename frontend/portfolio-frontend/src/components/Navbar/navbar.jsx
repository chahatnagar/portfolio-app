import React from 'react';
import './navbar.css'; 
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">chahat.</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Blog</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
