import React from "react";

import Day from "./Day";
import "./Forecast.css";
import { isArray } from "util";

const Forecast = ({ weather = [] }) => {
  const renderDays = () => {
    if (isArray(weather)) {
      return weather.map(day => {
        return <Day key={day.dt} code={day.code} data={day.temp} />;
      });
    }
  };
  return (
    <div className="forecast">
      <ul className="five-day">{renderDays()}</ul>
    </div>
  );
};

export default Forecast;
