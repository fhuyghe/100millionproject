import React, {Component} from 'react';
 
import AmChartTest from '../Charts/CircleChart';
import { fakeData, swingStates } from '../../Data/sharedData.js'
import AppHeader from '../AppHeader/AppHeader'

class SwingStatesAmChart extends Component {
  constructor() {
    super();
    this.state = {};
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
          <AmChartTest fakeData={fakeData} swingStates={swingStates}/>
        </main>
      </div>
    );
  }
}


 
export default SwingStatesAmChart;