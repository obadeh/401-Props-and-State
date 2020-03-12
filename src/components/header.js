import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="title">
      <h1>RUSTy App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;