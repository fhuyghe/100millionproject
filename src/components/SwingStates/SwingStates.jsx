import React from "react";
import { NavLink } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import "./SwingStates.scss";
import { swingStates } from "../../Data/sharedData.js";

const SwingStates = () => {
  const swingList = swingStates.map((stateName, index) => (
    <div className="state-name">
      <NavLink
        className="state-name-link"
        activeClassName="active"
        to={{
          pathname: `/swingstates/${stateName}`,
          state: {stateId: index}
        }}
      >
        {stateName}
      </NavLink>
    </div>
  ));
  
  return (
    <div className="swingstates-page">
      <AppHeader />

      <main className="swingstates-main">
        <div className="swing-states-title">Swing States</div>
        {swingList}
      </main>
    </div>
  );
};

export default SwingStates;
