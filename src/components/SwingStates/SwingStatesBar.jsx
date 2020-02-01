import React, { Component } from "react";
import BarChart from "../Charts/BarChart";
import AppHeader from "../AppHeader/AppHeader";
import { swingStates } from "../../Data/sharedData.js";
import { Select } from "../Shared/Select";
import "./SwingStatesBar.scss";

class SwingBarChart extends Component {
  constructor() {
    super();
    this.state = {
      // value: 0
    };
  }
  componentDidMount() {
    let id = window.location.pathname.lastIndexOf("/");
    this.setState({
      value: window.location.pathname.substring(id + 1)
    });
  }
  handleChange = (event, value) => {
    console.log(value);
    this.setState({ value: value });
  };

  render() {
    let options = swingStates.map((stateName, i) => (
      <option key={i} value={i}>
        {stateName}
      </option>
    ));
      console.log(this.state.value)
    return (
      <div className="swingstates-bar">
        <AppHeader />
        <main className="swingstates-bar-main">
          <h3 className="swingstates-bar-title">Swing States</h3>
          <form>
            <div className="select-box">
              <Select
                value={this.state.value && this.state.value}
                handleChange={this.handleChange}
                options={options}
                className={"select"}
              />
            </div>
          </form>
          {this.state.value && this.state.value &&
          <BarChart type={"bar"} value={this.state.value} />}
        </main>
      </div>
    );
  }
}

export default SwingBarChart;
