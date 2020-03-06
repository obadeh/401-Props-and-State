import React from 'react';
import '../style/style.scss';
import Header from './header.js';
import Footer from './footer.js';
import { Route } from 'react-router-dom';
import History from './history.js';
import Home from './home.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], input: '',history : [] };

  }
  handleSubmit = results => {
    this.setState({ results });
    // this.setState([...this.state.history,this.state.input] )
    this.setState(state => {
      const history = [...state.history, state.input];
      return {
        history,
      };
    });
  };
  handleChange = input => {
    this.setState({ input });
    console.log('state', this.state.input);
  };


  render() {
    return (
      <div>
        <Header />

        <Route exact path="/" render={() => <Home results={this.state.results} url={this.state.input} sub={this.handleSubmit} ch={this.handleChange}/>} />
        <Route exact path="/history" render={() => <History history={this.state.history}/>} />

        <Footer />
      </div>    );
  }
}

export default App;
