import React, { Component } from "react";
import BarChart from "../Charts/BarChart";
import AppHeader from "../AppHeader/AppHeader";

class SwingStatesCircle extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
   
    return (
      <div className="swing-states-bar">
        <AppHeader />
        <main className="swing-states-main">
          <h3 className="title-swing-bar">Swing States</h3>
          <form>
            <div className="select-box">
           
              <select
                className="select"
                style={{ textAlign: "center" }}
                value={this.state.value}
                onChange={this.handleChange}
              >
               {/* {options} */}

              </select>
             
            </div>
          </form>
          <BarChart type={'bubble'}/>
        </main>
      </div>
    );
  }
}

export default SwingStatesCircle