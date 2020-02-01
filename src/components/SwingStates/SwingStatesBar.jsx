import React, { Component } from "react";
import BarChart from "../Charts/BarChart";
import AppHeader from "../AppHeader/AppHeader";
import { swingStates } from "../../Data/sharedData.js";
import { Select } from "../Shared/Select"
import "./SwingStatesBar.scss"

class SwingBarChart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
   
    let options = swingStates.map((stateName, i) => (
      <option key={i} value={i}>
        {stateName}
      </option>
    ));

  
    return (
      <div className="swingstates-bar">
        <AppHeader />
        <main className="swingstates-bar-main">
          <h3 className="swingstates-bar-title">Swing States</h3>
          <form>
            <div className="select-box">
              <Select
                value={this.state.value}
                // onChange={this.state.onChange}
                options={options}
                className={"select"}
              />
            </div>
          </form>
          <BarChart type={"bar"} />
        </main>
      </div>
    );
  }
}

export default SwingBarChart;
