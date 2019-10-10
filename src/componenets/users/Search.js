import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    userName: ""
  };

  static propTypes = {
    userName: PropTypes.string.isRequired
  };
  OnChnageHandler = e => {
    this.setState({ userName: e.target.value });
  };
  OnClearhandler = e => {
    this.props.clear();
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.userName === "")
      this.props.SetAlert("Please enter something", "light");
    else {
      this.props.search(this.state.userName);
      this.setState({ userName: "" });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            placeholder="Type your search here..."
            type="text"
            name="text"
            value={this.state.userName}
            onChange={this.OnChnageHandler}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.display && (
          <button
            value="Clear"
            className="btn btn-dark btn-block"
            onClick={this.OnClearhandler}
            style={{
              display: "block",
              width: "100px",
              margin: "auto",
              textAlign: "center",
              borderRadius: "50px"
            }}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
