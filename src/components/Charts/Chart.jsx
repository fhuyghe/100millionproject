import React, { Component } from "react";
import BarChart from './BarChart'
import CircleChart from './CircleChart'
import { fakeData, swingStates } from "../../Data/sharedData.js";



class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeData: fakeData,
      activeIndex: 0
    };
  }
  componentDidMount() {
    
   
  }
  
  componentDidUpdate(prevProps, prevState){
    // if(this.props.value !== prevProps.value){
    //   console.log(this.state.series)
    //   this.state.series.data = this.props.fakeData[this.props.value].children[this.props.type].children
    //   // this.componentDidMount()
    // }
    // if(this.props.type !== prevProps.type){
    //   this.state.series.data = this.props.fakeData[this.props.value].children[this.props.type].children

    //   // this.componentDidMount()
    // }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    const title = "What is the most important issue facing the U.S. today?";

    return (
      <div id="circle-chart">
      <CircleChart
            title={title}
            fakeData={fakeData}
            swingStates={swingStates}
            type={this.state.activeIndex}
            value={this.state.value}
          />
          {/* <BarChart type={"bar"} value={this.state.value} />} */}

      
      </div>
    );
  }
}

export default Chart;
