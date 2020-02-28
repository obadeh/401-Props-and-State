import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
// import App from './components/app.js';

const Jj=()=>{
    return(<h1>hiii</h1>)
}

class App extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Jj />
        
        </React.Fragment>
      );
    }
  }


ReactDOM.render(<App />, document.getElementById('root'));