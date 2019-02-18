import React, { Fragment } from "react";

// import logo from "../icons/logo.png";

const Title = () => {
  return (
    <Fragment>
      <h3 className="title">
        Rain or Shine
        <img className="logo" src="icons/logo.png" alt="logo" width={70} />
      </h3>
    </Fragment>
  );
};

export default Title;
