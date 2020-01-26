import React, { Component } from "react";
import Chart from "chart.js";
import BarChart from "../Charts/BarChart";
import AppHeader from "../AppHeader/AppHeader";
// import { SwingStatesCircle } from "../../Data/sharedData.js";

class SwingStatesCircle extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    console.log(swingStates)
    let options = swingStates.map((d, i) => (
      <option key={i} value={i}>{d}</option>
      
    ));

    console.log(options);
    return (
      <div className="swing-states-bar">
        <AppHeader />
        <main className="swing-states-main">
          <h3 className="title-swing-bar">Swing States</h3>
          <form>
            <div className="select-box">
              {/* <label> */}
              <select
                className="select"
                style={{ textAlign: "center" }}
                value={this.state.value}
                onChange={this.handleChange}
              >
               {options}

              </select>
              {/* </label> */}
            </div>
          </form>
          <BarChart />
        </main>
      </div>
    );
  }
}

export default SwingStatesCircle