import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import dataviz from "@amcharts/amcharts4/themes/dataviz.js";

// am4core.useTheme(dataviz);
am4core.useTheme(am4themes_animated);

class AmChartTest extends Component {
  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdiv",
      am4plugins_forceDirected.ForceDirectedTree
    );
    chart.background.fill = "#F2705E";


    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
   // Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";

// Add labels
series.nodes.template.label.text = "{name}";
series.fontSize = 10;
series.minRadius = 15;
series.maxRadius = 80;

    series.data = this.props.fakeData[0].children
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

export default AmChartTest;
