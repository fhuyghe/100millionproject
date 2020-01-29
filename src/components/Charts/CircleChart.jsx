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
    let chart = am4core.create(
      "chartdiv",
      am4plugins_forceDirected.ForceDirectedTree
    );
    chart.background.fill = "#F2705E";

    let networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    
    console.log(this.props.fakeData[0].children)
    let voters = this.props.fakeData[0].children
  
      
    networkSeries.data = voters
    // [
    //   {
    //     name: "Voters",
    //     value: 600,
    //     children: [
    //       {
    //         name: "Black Tea",
    //         value: 60
    //       },
    //       {
    //         name: "Floral",
    //         value: 50
            
    //       }
    //     ]
    //   },
   
    // ];

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";
    networkSeries.links.template.distance = 1;
    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;
    networkSeries.nodes.template.outerCircle.scale = 1;

    networkSeries.nodes.template.label.text = "{name}";
    networkSeries.fontSize = 8;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.nodes.template.label.truncate = true;
    networkSeries.minRadius = am4core.percent(2);
    networkSeries.manyBodyStrength = -5;
    networkSeries.links.template.strokeOpacity = 0;
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
