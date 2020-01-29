import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import dataviz from "@amcharts/amcharts4/themes/dataviz.js";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";

/* Chart code */
// Themes begin
am4core.useTheme(dataviz);
am4core.useTheme(am4themes_animated);

class AmChartTest extends Component {
  componentDidMount() {
    let chart = am4core.create(
      "chartdiv",
      am4plugins_forceDirected.ForceDirectedTree
    );
    chart.background.fill = 'green'

    let networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    networkSeries.data = [
      {
        name: "Flora",
        children: [
          {
            name: "Black Tea",
            value: 1
          },
          {
            name: "Floral",
            children: [
              {
                name: "Chamomile",
                value: 1
              },
              {
                name: "Rose",
                value: 1
              },
              {
                name: "Jasmine",
                value: 1
              }
            ]
          }
        ]
      },
      {
        name: "Fruity",
        children: [
          {
            name: "Berry",
            children: [
              {
                name: "Blackberry",
                value: 1
              },
              {
                name: "Raspberry",
                value: 1
              },
              {
                name: "Blueberry",
                value: 1
              },
              {
                name: "Strawberry",
                value: 1
              }
            ]
          },
          {
            name: "Dried Fruit",
            children: [
              {
                name: "Raisin",
                value: 1
              },
              {
                name: "Prune",
                value: 1
              }
            ]
          },
          {
            name: "Citrus Fruit",
            children: [
              {
                name: "Grapefruit",
                value: 1
              },
              {
                name: "Orange",
                value: 1
              },
              {
                name: "Lemon",
                value: 1
              },
              {
                name: "Lime",
                value: 1
              }
            ]
          }
        ]
      },

      {
        name: "Spices",
        children: [
          {
            name: "Pungent",
            value: 1
          },
          {
            name: "Pepper",
            value: 1
          },
          {
            name: "Brown Spice",
            children: [
              {
                name: "Anise",
                value: 1
              },
              {
                name: "Nutmeg",
                value: 1
              },
              {
                name: "Cinnamon",
                value: 1
              },
              {
                name: "Clove",
                value: 1
              }
            ]
          }
        ]
      },
      //  {
      //   name: 'Nutty/Cocoa',
      //   children: [{
      //     name: 'Nutty',
      //     children: [{
      //       name: 'Peanuts', value: 1
      //     }, {
      //       name: 'Hazelnut', value: 1
      //     }, {
      //       name: 'Almond', value: 1
      //     }]
      //   }, {
      //     name: 'Cocoa',
      //     children: [{
      //       name: 'Chocolate', value: 1
      //     }, {
      //       name: 'Dark Chocolate', value: 1
      //     }]
      //   }]
      // },
      {
        name: "Sweet",
        children: [
          {
            name: "Brown Sugar",
            children: [
              {
                name: "Molasses",
                value: 1
              },
              {
                name: "Maple Syrup",
                value: 1
              },
              {
                name: "Caramelized",
                value: 1
              },
              {
                name: "Honey",
                value: 1
              }
            ]
          },
          {
            name: "Vanilla",
            value: 1
          },
          {
            name: "Vanillin",
            value: 1
          },
          {
            name: "Overall Sweet",
            value: 1
          },
          {
            name: "Sweet Aromatics",
            value: 1
          }
        ]
      }
    ];

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
    return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
  }
}

export default AmChartTest;
