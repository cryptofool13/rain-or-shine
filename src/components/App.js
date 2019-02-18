import React, { useState, useEffect } from "react";
import axios from "axios";

import Main from "./Main";
import Welcome from "./Welcome";
import { currentParser, forecastParser } from "../utils";
import "./App.css";

const App = () => {
  const [zip, setZip] = useState("");
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState({});

  const fetchCurrent = async () => {
    if (!zip) {
      return null;
    } else {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=33a6c89964ed316077f775233a778a7a`
      );
      setCurrent(currentParser(result.data));
    }
  };

  const fetchForecast = async () => {
    if (!zip) {
      return null;
    } else {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&appid=33a6c89964ed316077f775233a778a7a`
      );
      setForecast(forecastParser(result.data));
    }
  };

  const renderCont = () => {
    return !zip ? (
      <Welcome onChange={setZip} />
    ) : (
      <Main current={current} forecast={forecast} />
    );
  };

  useEffect(() => {
    fetchForecast();
    fetchCurrent();
  }, [zip]);

  return <div className="app">{renderCont()}</div>;
};

export default App;
