import React, { Component } from "react";
import BarChart from "./BarChart";
import CircleChart from "./CircleChart";

class Chart extends Component {
  componentDidMount() {}

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div>
        {/* <CircleChart stateId={this.props.stateId} /> */}
        <BarChart type={"bar"} value={this.props.stateId} />
      </div>
    );
  }
}

export default Chart;
