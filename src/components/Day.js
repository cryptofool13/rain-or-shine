import React from "react";

import { icon } from "../utils";

const Day = ({ code, data }) => {
  return (
    <li className="day">
      <img className="day-icon" src={`icons/${icon(code)}`} alt="icon" />
      <h6 className="day-temp">{data}</h6>
    </li>
  );
};

export default Day;
