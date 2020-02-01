import React from "react";
import './Select.scss'

export const Select = props => {
  console.log(props.value)
  return (
    <select
      className="select"
      value={props.value}
      onChange={(event)=>props.handleChange(event)}
    >
      {props.options}
    </select>
  );
};
