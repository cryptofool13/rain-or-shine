import React, { Fragment } from "react";

import Title from "./Title";
import Form from "./Form";

const Welcome = ({ onChange }) => {
  return (
    <Fragment>
      <Title />
      <Form onChange={onChange} />
    </Fragment>
  );
};

export default Welcome;
