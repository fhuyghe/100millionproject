import React from "react";
import './Select.scss'

export const Select = props => {
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
