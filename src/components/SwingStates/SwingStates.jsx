import React from "react";
import { NavLink } from "react-router-dom";
import "./SwingStates.scss";
import { swingStates } from "../../Data/sharedData.js";

const SwingStates = () => {
  const swingList = swingStates.map((state, index) => (
    <div className="state-name">
      <NavLink
        className="state-name-link"
        activeClassName="active"
        to={{
          pathname: `/swingstates/${state.path}`,
          state: {
            state,
            stateId: index
          }
        }}
      >
        {state.name}
      </NavLink>
    </div>
  ));
  
  return (
    <div className="swingstates-page">
      <main className="swingstates-main">
        <div className="swing-states-title">Swing States</div>
        {swingList}
      </main>
    </div>
  );
};

export default SwingStates;
