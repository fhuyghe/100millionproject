import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import dataviz from "@amcharts/amcharts4/themes/dataviz.js";
import { fakeData, swingStates } from "../../Data/sharedData.js";
import './CircleChart.scss'

// am4core.useTheme(dataviz);
am4core.useTheme(am4themes_animated);

class CircleChart extends Component {
  state = {
    index: 0,
    activeIndex: 0,
    fakeData: fakeData
  };
  componentDidMount() {
    let id = this.props.stateId ? this.props.stateId : 0;
   

    am4core.useTheme(am4themes_animated);

    let chart = am4core.create(
      "circle-chart",
      am4plugins_forceDirected.ForceDirectedTree
    );
    chart.background.fill = "#F2705E";

    chart.dataFields.color = "color";

    let title = chart.titles.create();
    title.text = "What is the most important issue facing the U.S. today?";
    title.fill = "white";
    title.fontSize = 20;

    title.wrap = true;
    title.textAlign = "middle";
    title.isMeasured = false;
    title.y = 20;
    title.x = 10;
    title.paddingLeft = 30;
    title.paddingRight = 30;
    title.marginBottom = 50;

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    // Set up data fields
    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.dataFields.color = "color";

    series.colors.list = [
      am4core.color("#FBD535"),
      am4core.color("#6B9BCA"),
      am4core.color("#37B98B"),
      am4core.color("white"),
      am4core.color("green"),
      am4core.color("blue")
    ];

    series.nodes.template.label.text = "[black]{name}[/]";
    series.nodes.template.label.fontFamily = "Anonymous Pro";
    series.nodes.template.label.wrap = true;

    series.fontSize = 14;
    series.minRadius = 15;
    series.maxRadius = 65;

    series.data = fakeData[id].children[this.state.activeIndex].children;
    this.setState({ series: series });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.stateId !== prevProps.stateId) {
   
      this.state.series.data = this.state.fakeData[this.props.stateId].children[
        this.state.activeIndex
      ].children;
    
    }

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  handleClick = (el, index) => {
    this.state.series.data = this.state.fakeData[this.props.stateId].children[
      index
    ].children;
    this.setState({
      activeIndex: index,
      name: el.name
    });
  };
  render() {


    return (
      <main className="circle-chart-main">
        <div id="circle-chart"></div>
        <div className="swing-circle-selectors">
          {fakeData[0].children.map((el, index) => {
            let active = this.state.activeIndex === index ? 1 : 0;
            let bgcolor =
              this.state.activeIndex === index ? "black" : "transparent";
            let vis = this.state.activeIndex === index ? "visible" : "hidden";
            return (
              <div className="selectors" key={index} >
                <div
                  className={"arrow-up"}
                  style={{
                    // background: `${bgcolor}`,
                    visibility: `${vis}`
                  }}
                ></div>
                <div
                  key={index}
                  active={active}
                  style={{
                    background: `${bgcolor}`
                  }}
                  onClick={()=>this.handleClick(el,index)}
                  name={el.name}
                >
                  {el.name}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}

export default CircleChart;
