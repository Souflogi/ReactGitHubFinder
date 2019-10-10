import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>

      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "Title",
  icon: "fa fa-facebook"
};
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBar;
