import React from "react";
import Useritem from "./Useritem";
import PropTypes from "prop-types";

const Users = ({ users }) => {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5 , 1fr)",
    gridGap: "1rem"
  };

  return (
    <div style={userStyle}>
      {users.map(u => (
        <Useritem user={u} key={u.id}  />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
