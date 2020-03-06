import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home.js';
import {  NavLink } from 'react-router-dom';






const Histoy = (props) => {
  
  let items = props.history.map((item, i) => <li key={i}>{item}<button><NavLink to="/">re-run</NavLink></button> </li>);

  return (
    <header className="history">
      <h1>History</h1>
      <ul>
        {items}
        

      </ul>
    <Route exact path="/" component={Home}>home</Route>

    </header>
  );
};

export default Histoy;