import React, {Component} from 'react';
 
import AmChartTest from '../Charts/CircleChart';
import { fakeData, swingStates } from '../../Data/sharedData.js'
// import {swingStates} from '../../Data/sharedData.js'

import AppHeader from '../AppHeader/AppHeader'

 

 
 
class SwingStatesAmChart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  prepareData = () => {
    const chartData = {
      labels: [],
      datasets: [
        {
          data: [],
          datalabels: {
            color: "yellow"
          },
          backgroundColor: ["#37B98B", "#E5F83C", "#6B9BCA"],
          borderWidth: 1
        }
      ]
    };
    fakeData.forEach(d => {
      chartData.labels.push(d.name);
      chartData.datasets[0].data.push(d.amount);
    });
    // console.log(chartData);
    return chartData;
  };

  render() {
    const chartData = this.prepareData();
    console.log(chartData);

    let options = swingStates.map((d, i) => (
      <option key={i} value={i}>
        {d}
      </option>
    ));

    console.log(options);
    const title = "Do you plan on voting in 2020?";
    return (
      <div className="swing-states-bar">
        <AppHeader data={chartData} />
        <main className="swing-states-main">
          <h3 className="title-swing-bar">Swing States</h3>
          <form>
            <div className="select-box">
              <label>
              <select
                className="select"
                // style={{ textAlign: "center" }}
                value={this.state.value}
                onChange={this.handleChange}
              >
                {options}
              </select>
              </label>
            </div>
          </form>
          <AmChartTest type={"bar"} data={chartData} title={title} />
        </main>
      </div>
    );
  }
}


 
export default SwingStatesAmChart;