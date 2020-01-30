import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import dataviz from "@amcharts/amcharts4/themes/dataviz.js";

// am4core.useTheme(dataviz);
am4core.useTheme(am4themes_animated);

class CircleChart extends Component {
  
  componentDidMount() {
    console.log('cdm')
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdiv",
      am4plugins_forceDirected.ForceDirectedTree
    );
    chart.background.fill = "#F2705E";
 
    chart.dataFields.color = "color";
  



    let title = chart.titles.create();
    title.text = this.props.title;
    title.fill = "white";
    title.fontSize = 20;
 
    title.fontStyle = "italic";
    title.wrap = true;
    title.textAlign = "middle";
    title.isMeasured = false;
    title.y = 20;
    title.x = 10;
    title.paddingLeft = 30;
    title.paddingRight = 30;
    title.paddingBotton = 50;

  
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
    series.maxRadius = 75;

    series.data = this.props.fakeData[0].children[this.props.type].children;
  }
  componentDidUpdate(prevProps, prevState){
   
    if(this.props.type !== prevProps.type){
   
      this.componentDidMount()
    }

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    console.log(this.props)
    return (
      <div id="chartdiv"></div>
    );
  }
}

export default CircleChart;
