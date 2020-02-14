import React from "react";
import "./Select.scss";

export const Select = props => {
  
  return (
    <form className="select-box">
      <select
        className="select"
        value={props.stateId}
        name={props.stateName}
        onChange={event => props.handleChange(event)}
      >
        {props.options}
      </select>
      <div className="selectArrow"><i className="far fa-chevron-down"></i></div>
    </form>
  );
};
