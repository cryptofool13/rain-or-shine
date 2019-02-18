import React, { useState } from "react";

const Form = ({ onChange }) => {
  const [inVal, setInVal] = useState("");

  const handleChange = event => {
    setInVal(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onChange(inVal);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="lbl">Enter your zipcode:</label>
      <input
        maxLength={5}
        className="zip-in"
        onChange={handleChange}
        value={inVal}
      />
      <button className="btn">Forecast</button>
    </form>
  );
};

export default Form;
