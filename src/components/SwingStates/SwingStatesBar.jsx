import React, { Component } from "react";
import Chart from "chart.js";
import BarChart from "../Charts/BarChart";
import AppHeader from "../AppHeader/AppHeader";
import { swingStates } from "../../Data/sharedData.js";
import { Select } from "../Shared/Select"

class SwingBarChart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    console.log(swingStates);
    let options = swingStates.map((d, i) => (
      <option key={i} value={i}>
        {d}
      </option>
    ));

    console.log(options);
    return (
      <div className="swing-states-bar">
        <AppHeader />
        <main className="swing-states-main">
          <h3 className="title-swing-bar">Swing States</h3>
          <form>
            <div className="select-box">
              <Select
                value={this.state.value}
                onChange={this.state.onChange}
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
