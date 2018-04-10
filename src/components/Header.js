import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <div className="container">
    <div className="header">
      <ul className="header-items">
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/CV">CV</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>

);

export default Header;
