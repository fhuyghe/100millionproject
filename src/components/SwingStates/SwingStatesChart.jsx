import React, { Component } from "react";
import BarChart from "../Charts/BarChart";
import AppHeader from "../AppHeader/AppHeader";
// import { swingStates } from "../../Data/sharedData.js";
import { Select } from "../Shared/Select";
import "./SwingStatesCircle.scss";
import { Redirect } from "react-router-dom"
import Chart from "../Charts/Chart.jsx"
import CircleChart from "../Charts/CircleChart";
import { fakeData, swingStates } from "../../Data/sharedData.js";


class SwingBarChart extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }
  componentDidMount() {
    let idx = window.location.pathname.lastIndexOf("/")
    let id = window.location.pathname.substring(idx + 1)
    let stateId = isNaN(parseInt(id)) ? 0 : id 

    this.setState({
      value: stateId
    });
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.withoutID !== prevState.withoutID){
      this.componentDidMount()
    }
  }
  handleChange = (event) => {
    this.setState({
      value:event.target.value,
      redirect: true
    })
  };

  render() {
    let options = swingStates.map((stateName, i) => (
      <option key={i} value={i}>
        {stateName}
      </option>
    ));
    let redirect = this.state.redirect && <Redirect to={`./${this.state.value}`}/> 
    const title = "What is the most important issue facing the U.S. today?";

    return (
      <div className="swingstates-circle">
        {redirect}
        <AppHeader />
        <main className="swingstates-circle-main">
          <h3 className="swingstates-circle-title">Swing States</h3>
          <form>
            <div className="select-box">
              <Select
                value={this.state.value}
                handleChange={this.handleChange}
                options={options}
                className={"select"}
              />
            </div>
          </form>
          {/* { <Chart value={this.state.value} />} */}
          <CircleChart
            title={title}
            fakeData={fakeData}
            swingStates={swingStates}
            type={this.state.activeIndex}
            value={this.state.value}
          />
        </main>
      </div>
    );
  }
}

export default SwingBarChart;
