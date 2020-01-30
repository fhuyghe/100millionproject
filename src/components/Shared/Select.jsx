import React from "react";

export const Select = props => {
  console.log('hi', props)
  return (
    <select
      className="select"
      // style={{ textAlign: "center" }}
      value={props.value}
      onChange={props.handleChange}
    >
      {props.options}
    </select>
  );
};
