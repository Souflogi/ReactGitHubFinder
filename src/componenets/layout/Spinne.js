import React, { Fragment } from "react";
import Spinner from "../layout/spinner.gif";
const Spinne = () => (
  <Fragment>
    <img
      src={Spinner}
      alt="loading"
      style={{ margin: "auto", display: "block", width: "500px" }}
    />
  </Fragment>
);

export default Spinne;
