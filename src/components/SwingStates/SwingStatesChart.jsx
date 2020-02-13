import React, { Component } from "react";
import BarChart from "../Charts/BarChart.jsx";
// import { swingStates } from "../../Data/sharedData.js";
import { Select } from "../Shared/Select";
import "./SwingStatesChart.scss";
import { Redirect } from "react-router-dom";
import CircleChart from "../Charts/CircleChart";
import { fakeData, swingStates } from "../../Data/sharedData.js";
import ChartSelect from "../Shared/ChartSelect";

class SwingStatesChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateObject: {},
      chartType: "Bar"
    };
  }
  componentDidMount() {
   
    let stateName = this.props.match.params.statename || "colorado";
    let stateObject = swingStates.find(obj => { return obj.path === stateName })[0]

    this.setState({
      stateObject
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
  
    this.setState({
      chartType: chartType
    });
  };

  render() {
    let options = swingStates.map((state, i) => (
      <option key={i} value={i}>
        {state.name}
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
 
    return (
      <div className="swingstates-chart">
        <div className="wrap">
        <main className="swingstates-chart-main">
          <div className="top">
            <h1 className="swingstates-chart-title">Swing States</h1>

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
      </div>
    );
  }
}

export default SwingStatesChart;
