import React from "react";
import { NavLink } from 'react-router-dom'
import AppHeader from "../AppHeader/AppHeader";
import "./SwingStates.scss";

const SwingStates = () => {
  const swingStates = [
    "Colorado",
    "Florida",
    "Georgia",
    "Michigan",
    "Minnesota",
    "Nevada",
    "New Hampshire",
    "Ohio",
    "Pennsylvania",
    "Virginia"
  ];
  const swingList = swingStates.map(stateName => (
    <div className="state-name"><NavLink className="state-name-link" activeClassName="active" to="/">{stateName}</NavLink></div>
  ));
  return (
    <div className="swingstates-page">
      <AppHeader />
      
      <main class="main-swing">
      <div className="title-swing">Swing States</div>{swingList}
      </main>
    </div>
  );
};

export default SwingStates;
