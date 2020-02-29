import React from "react";
import "../style/style.scss";
import Header from "./header.js";
import Footer from "./footer.js";
import Form from "./form.js";
import Results from "./results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [""], input: "" };
  }
  handleSubmit = results => {
    this.setState({ results });
  };
  handleChange = input => {
    this.setState({ input });
    console.log("state", this.state.input);
  };
  // handleChange() {
  // console.log("value from cons", value);
  // this.setState({ value });
  //  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form
          url={this.state.input}
          handler={this.handleSubmit}
          handelCh={this.handleChange}
        />
        <Results result={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
