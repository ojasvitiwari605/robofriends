import React, { Component, useState } from "react";
import Cardlist from "./Cardlist";
import Scroll from "./Scroll";
import Search from "./search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responses) => responses.json())
      .then((users) => this.setState({ robots: users }));
  }

  onsearchchange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc Appi">
        <h1>ROBOFRIENDS</h1>
        <Search searchchange={this.onsearchchange} />
        <Scroll>
          <Cardlist robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
