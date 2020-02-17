import React from "react";
import { NavLink } from "react-router-dom";
import "./SwingStates.scss";
import { swingStates } from "../../Data/sharedData.js";

const SwingStates = () => {
  const swingList = swingStates.map((state, index) => (
    <div className="state-name" key={index}>
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
        <div className="wrap">
          <h1>Swing States</h1>
          {swingList}
          </div>
      </main>
    </div>
  );
};

export default SwingStates;
