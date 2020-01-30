import React, { Component } from "react";

import CircleChart from "../Charts/CircleChart";
import { fakeData, swingStates } from "../../Data/sharedData.js";
import AppHeader from "../AppHeader/AppHeader";
import { Select } from "../Shared/Select";

class SwingStatesCircle extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    let options = swingStates.map((d, i) => (
      <option key={i} value={i}>
        {d}
      </option>
    ));

    console.log(options);
    const title = "What is the most important issue facing the U.S. today?";
    return (
      <div className="swing-states-bar">
        <AppHeader />
        <main className="swing-states-main">
          <h3 className="title-swing-bar">Swing States</h3>
          <form>
            <div className="select-box">
              <label>
                <Select
                  value={this.state.value}
                  onChange={this.state.onChange}
                  options={options}
                  className={"select"}
                />
              </label>
            </div>
          </form>
          <CircleChart
            title={title}
            fakeData={fakeData}
            swingStates={swingStates}
          />
        </main>
      </div>
    );
  }
}

export default SwingStatesCircle;
