import React from 'react';
import { Route } from 'react-router-dom';
import History from './history.js';

import Form from './form.js';
import Home from './home.js';

const Main = props => {

  return (


    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/history" render={() => <History history={props.history}/>} />
    </main>

  );
};

export default Main;