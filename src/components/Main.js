import React, { Fragment } from "react";

import Current from "./Current";
import Forecast from "./Forecast";

const Main = ({ current, forecast }) => {
  return (
    <Fragment>
      <Current weather={current} />
      <Forecast weather={forecast} />
    </Fragment>
  );
};

export default Main;
