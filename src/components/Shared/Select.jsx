import React from "react";
import './Select.css'

export const Select = props => {
  console.log('hi', props)
  return (
    <select
      className="select"
      value={props.value}
      onChange={props.handleChange}
    >
      {props.options}
    </select>
  );
};
