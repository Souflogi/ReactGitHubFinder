import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import NavBar from "./componenets/layout/NavBar";
import Users from "./componenets/users/Users";
import Spinne from "./componenets/layout/Spinne";
import Search from "./componenets/users/Search";
import Alert from "./componenets/layout/Alert";
import About from "./componenets/pages/About";
import More from "./componenets/users/More";

class App extends Component {
  state = {
    users: [],
    loading: false,
    error: null,
    user: {},
    repos: []
  };

  search = async name => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${name}&client_id=users${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await response.data.items;
    this.setState({ users: data, loading: false });
  };
  clear = () => {
    this.setState({ users: [] });
  };

  Alert = (Msg, color) => {
    this.setState({ error: { Msg, color } });
    setTimeout(() => {
      this.setState({ error: null });
    }, 3000);
  };
  GetUserInfo = async login => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${login}?client_id=users${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const data = await response.data;
    this.setState({ loading: false, user: data });
  };

  GetUserRepos = async login => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=users${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const data = await response.data;
    this.setState({ loading: false, repos: data });
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const response = await axios.get(
  //     `https://api.github.com/users?client_id=users${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   const data = await response.data;
  //   this.setState({ users: data, loading: false });
  // }

  render() {
    return (
      <div className="App">
        <NavBar title="GitHub-Finder" icon="fab fa-github" />
        <Alert error={this.state.error} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Search
                  search={this.search}
                  clear={this.clear}
                  display={this.state.users.length > 0 ? true : false}
                  SetAlert={this.Alert}
                />

                {!this.state.loading ? (
                  <div className="container">
                    <Users users={this.state.users} />
                  </div>
                ) : (
                  <Spinne />
                )}
              </Fragment>
            )}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/user/:name"
            render={props => (
              <More
                getUser={this.GetUserInfo}
                GetRepos={this.GetUserRepos}
                user={this.state.user}
                repos={this.state.repos}
                loading={this.state.loading}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
