import React, { Component } from "react";
import BarChart from "../Charts/BarChart.jsx";
import AppHeader from "../AppHeader/AppHeader";
// import { swingStates } from "../../Data/sharedData.js";
import { Select } from "../Shared/Select";
import "./SwingStatesChart.scss";
import { Redirect } from "react-router-dom";
import Chart from "../Charts/Chart.jsx";
import CircleChart from "../Charts/CircleChart";
import { fakeData, swingStates } from "../../Data/sharedData.js";
import ChartSelect from "../Shared/ChartSelect";

class SwingStatesChart extends Component {
  constructor() {
    super();
    this.state = {
      stateId: 0,
      chartType: "Bar"
    };
  }
  componentDidMount() {
    // console.log(this.props);
    let idx = this.props.location.pathname.lastIndexOf("/");
    let url = window.location.pathname.substring(idx + 1);
    let stateName = swingStates.includes(url) ? url : "Colorado";
    let stateId = stateName && swingStates.indexOf(stateName);

    this.setState({
      stateId: stateId,
      stateName: stateName
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.withoutID !== prevState.withoutID) {
  //     this.componentDidMount();
  //   }
  // }
  handleChange = event => {
    this.props.history.push(swingStates[event.target.value]);

    this.setState({
      stateId: event.target.value,
      stateName: swingStates[event.target.value]
      // redirect: true
    });
  };

  handleClick = chartType => {
    console.log("hi", chartType);
    this.setState({
      chartType: chartType
    });
  };

  render() {
    let options = swingStates.map((stateName, i) => (
      <option key={i} value={i}>
        {stateName}
      </option>
    ));
    let renderChart =
      this.state.chartType === "Bar" ? (
        <BarChart stateId={this.state.stateId} />
      ) : this.state.chartType === "Circle" ? (
        <CircleChart
          stateId={this.state.stateId}
          handleClick={this.handleClick}
        />
      ) : null;
    console.log(this.state);
    return (
      <div className="swingstates-chart">
        <AppHeader />
        <main className="swingstates-chart-main">
          <div className="top">
            <h3 className="swingstates-chart-title">Swing States</h3>

            <Select
              stateId={this.state.stateId}
              stateName={this.state.stateName}
              handleChange={this.handleChange}
              options={options}
            />
          </div>

          {renderChart}

          <ChartSelect handleClick={this.handleClick} />
        </main>
      </div>
    );
  }
}

export default SwingStatesChart;
