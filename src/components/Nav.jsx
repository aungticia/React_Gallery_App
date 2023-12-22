// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Nav = ({ changeQuery })=> {
  const handleNavClick = (tag) => {
    changeQuery(tag);
  };

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cats" onClick={() => handleNavClick('cats')}> Cats </NavLink>
        </li>
        <li>
          <NavLink to="/dogs" onClick={() => handleNavClick('dogs')}> Dogs </NavLink>
        </li>
        <li>
          <NavLink to="/computers" onClick={() => handleNavClick('computers')}> Computers </NavLink>
        </li>
        <li>
          <NavLink to="/trees" onClick={() => handleNavClick('trees')}> Trees </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;