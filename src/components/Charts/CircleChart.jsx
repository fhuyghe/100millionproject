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
    title.marginTop = 30;
    title.fontStyle = "italic";
    title.wrap = true;
    title.textAlign = "middle";
    title.paddingLeft = 30;
    title.paddingRight = 30;
    title.align = "center";

    // let label = chart.chartContainer.createChild(am4core.Label);
    // label.text = "Km / h";
    // label.align = "center";
    // label.isMeasured = false;
    // label.x = 70;
    // label.y = 480;

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    // Set up data fields
    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.dataFields.color = "color";

    series.colors.list = [
      // am4core.color("#FBD535"),
      // am4core.color("#6B9BCA"),
      // am4core.color("#37B98B"),
      // am4core.color("#AD7FB5"),
      // am4core.color("#DDBA8C"),
      // am4core.color("#EDEDED")

      am4core.color("green"),
      am4core.color("red"),
      am4core.color("orange"),
      am4core.color("blue"),
      am4core.color("red"),
      am4core.color("yellow")
    ];

    series.nodes.template.label.text = "[black]{name}[/]";
    series.nodes.template.label.fontFamily = "Anonymous Pro";
    series.fontSize = 10;
    series.minRadius = 15;
    series.maxRadius = 80;

    series.data = this.props.fakeData[0].children;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div
        id="chartdiv"
        style={{ margin: "0 auto", width: "90%", height: "80%" }}
      ></div>
    );
  }
}

export default CircleChart;
