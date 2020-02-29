import React from 'react';
import Form from './form';
import Result from './results';
import History from './history';

// let history=[]
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], input: '' };
    this.history = [];
  }
    handleSubmit = results => {
      this.setState({ results });
      this.history.push(this.state.input);
      console.log('this.state.input : ', this.state.input);
      console.log('history : ', this.history);
    };
    handleChange = input => {
      this.setState({ input });
      console.log('state', this.state.input);
    };


    render() {
      return (
        <React.Fragment>
          <h2>Home Page</h2>
          <Form url={this.state.input}
            handler={this.handleSubmit}
            handelCh={this.handleChange}/>
          <Result result={this.state.results}/>
          <History history={this.history}/>
        </React.Fragment>
      );
    }
}

export default Home;