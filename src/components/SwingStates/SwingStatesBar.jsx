import React, { Component } from "react";
import Chart from "chart.js";
import BarChart from "../Charts/BarChart";
import AppHeader from "../AppHeader/AppHeader"
import ReactSelect from './ReactSelect.js'

class SwingBarChart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const options = [
      { value: 'NewHampshire', label: 'New Hampshire'}
    ]
    return (
      <div className="swing-states-bar">
        <AppHeader/>
        <main className="swing-states-main">
          <h3 className="title-swing-bar">Swing States</h3>
            <ReactSelect options={options} />
            <BarChart />
          
              
         
        </main>
      </div>
    );
  }
}

export default SwingBarChart;
