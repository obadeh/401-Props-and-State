import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <header className="title">
        <h1>RUSTy App</h1>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/History">Stuff</NavLink>
          </li>
        </ul>
      </nav>
      </header>
    );
  };
  
  export default Header;