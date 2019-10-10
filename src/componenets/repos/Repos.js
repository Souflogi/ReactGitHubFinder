import React, { Fragment } from "react";
import RepoItem from "./RepoItem";
const Repos = ({ repos }) => {
  return (
    <Fragment>
      {repos.map(r => (
        <RepoItem key={r.id} repo={r} />
      ))}
    </Fragment>
  );
};

export default Repos;
