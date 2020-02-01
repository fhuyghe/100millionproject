import React, { Component } from "react";

import CircleChart from "../Charts/CircleChart";
import { fakeData, swingStates } from "../../Data/sharedData.js";
import AppHeader from "../AppHeader/AppHeader";
import { Select } from "../Shared/Select";
import './SwingStatesCircle.scss'

class SwingStatesCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeData: fakeData,
      activeIndex: 1
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = event => {

    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    let options = swingStates.map(state => (
      <option key={state} value={state}>
        {state}
      </option>
    ));

    
    const title = "What is the most important issue facing the U.S. today?";
    return (
      <div className="swingstates-circle">
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
          <CircleChart
            title={title}
            fakeData={fakeData}
            swingStates={swingStates}
            type={this.state.activeIndex}
            value={this.state.value}
          />

          <div className="swing-circle-selectors">
            {this.state.fakeData[0].children.map((el, index) => {
              let active = this.state.activeIndex === index ? 1 : 0
              let bgcolor = this.state.activeIndex === index ? 'black' : 'transparent'
              let vis = this.state.activeIndex === index ? 'visible' : 'hidden'
             return (
               
              <div className="selectors">
                <div 
                className={"arrow-up"}
                 style={{
                  // background: `${bgcolor}`,
                  visibility: `${vis}`
                }}></div>
                <div
                  key={index}
                  active = {active}
                  style={{
                    background: `${bgcolor}`
                  }}
                  onClick={() =>
                    this.setState({ activeIndex: index, name: el.name })
                  }
                  name={el.name}
                >
                  {el.name}
                </div>
              </div>
             )
  })}
          </div>
        </main>
      </div>
    );
  }
}

export default SwingStatesCircle;
