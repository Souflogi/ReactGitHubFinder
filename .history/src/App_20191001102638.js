import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./componenets/layout/NavBar";
import Users from "./componenets/users/Users";
import Spinne from "./componenets/layout/Spinne";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get(``https://api.github.com/users`);
    const data = await response.data;
    this.setState({ users: data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <NavBar title="GitHub-Finder" icon="fab fa-github" />
        {!this.state.loading ? (
          <div className="container">
            <Users users={this.state.users} />
          </div>
        ) : (
          <Spinne />
        )}
      </div>
    );
  }
}

export default App;
