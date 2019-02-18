import React from "react";

import { icon } from "../utils";
import "./Current.css";

const Current = ({ weather }) => {
  return (
    <div className="current">
      <img
        className="icon"
        src={`icons/${icon(weather.code)}`}
        alt="temp logo"
      />
      <h3 className="temp">{weather.temp}</h3>
      <ul className="hi-lo">
        <li className="desc">{weather.desc}</li>
        <li className="hi">High: {weather.hi}</li>
        <li className="lo">Low: {weather.lo}</li>
      </ul>
    </div>
  );
};

export default Current;
