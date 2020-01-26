import React, { Component } from "react";
import Chart from "chart.js";
import BarChart from "../Charts/BarChart";
import AppHeader from "../AppHeader/AppHeader"


class SwingBarChart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
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
          <form>
            <div className="select-box">
        {/* <label> */}
          <select className="select" style={{textAlign:'center'}} value={this.state.value} onChange={this.handleChange}>
            <option value="NH">New Hampshire</option>
            <option value="CO">Colorado</option>
            <option value="MI">Michigan</option>
            <option value="GA">Georgia</option>
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

export default SwingBarChart;
