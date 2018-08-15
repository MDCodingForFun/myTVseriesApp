import React, { Component } from "react";
import Main from "./components/Main";
import "./css/App.css";
import "whatwg-fetch";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">TV Series List</h1>
            <p className="lead">
              Here you can find all of your most loved series.
            </p>
          </div>
        </div>
        <Main />
      </div>
    );
  }
}
