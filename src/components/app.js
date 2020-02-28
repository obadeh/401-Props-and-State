
import React from 'react';
import '../style/style.scss';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
// import results from './results'


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;