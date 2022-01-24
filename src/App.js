import React from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Skills from "./components/Skills";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      currentViewToRender: null,
    };
  }

  clickHandler = (component) => {
    this.setState({ currentViewToRender: component });
  };

  render() {
    return (
      <div className="App">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Header />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <Button
            name="Om"
            component={<AboutMe clickHandler={this.clickHandler} />}
            clickHandler={this.clickHandler}
          />
          <Button
            name="Kunskaper"
            component={<Skills clickHandler={this.clickHandler} />}
            clickHandler={this.clickHandler}
          />
          <Button
            name="CV"
            component={<CV clickHandler={this.clickHandler} />}
            clickHandler={this.clickHandler}
          />
          <Button
            name="Kontakt"
            component={<Contact clickHandler={this.clickHandler} />}
            clickHandler={this.clickHandler}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.state.currentViewToRender}
        </div>
      </div>
    );
  }
}

export default App;
