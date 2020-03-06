import React from 'react';
import Form from './form';
import Result from './results';



const Home = (props)=>{


  return (
    <React.Fragment>
      <h2>Home Page</h2>
      <Form url={props.url}
        handler={props.sub}
        handelCh={props.ch}/>
      <Result results={props.results} />
    </React.Fragment>
  );

};

export default Home;