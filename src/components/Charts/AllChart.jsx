import React, { Component } from "react"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
import ChartSubsetSelector from "./ChartSubsetSelector"
import "./AllChart.scss"

// am4core.useTheme(dataviz);
am4core.useTheme(am4themes_animated)

class AllChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      activeIndex: 0
    }

    this.chartRef = React.createRef()
  }

  createChart(data) {
    const type = data.type
    am4core.useTheme(am4themes_animated)

    let colors = {
      red: '#F2705E',
      blue: '#009DE0',
      yellow: '#F8D807',
      green: '#3ABA89',
      purple: '#AC7EB7',
      grey: '#BFBFBF'
    }

    let chart = am4core.create(
      this.chartRef.current, //"all-chart",
      type === "circle"
        ? am4plugins_forceDirected.ForceDirectedTree
        : type === "pie"
        ? am4charts.PieChart
        : type === "bar" || type === "bar-vertical" || type === "line"
        ? am4charts.XYChart
        : null
    )

    chart.responsive.enabled = true;

    chart.colors.list = [
      am4core.color(colors.blue),
      am4core.color(colors.yellow),
      am4core.color(colors.green),
      am4core.color(colors.purple)
    ];

    let series

    if (type === "circle") {
      series = chart.series.push(
        new am4plugins_forceDirected.ForceDirectedSeries()
      )
      series.nodes.template.label.text = "[black]{name}[/]"
      series.nodes.template.label.fontFamily = "Anonymous Pro"
      series.nodes.template.label.wrap = false

      series.colors.list = [
        am4core.color(colors.yellow),
        // am4core.color(colors.yellow),
        am4core.color(colors.green)
        //am4core.color(colors.purple)
      ]
      series.colors.wrap = true;

      series.dataFields.value = "value"
      series.dataFields.name = "name"

      series.data = this.props.data[this.state.activeIndex]

      series.fontSize = 16
      series.minRadius = 25
      series.maxRadius = 120
    }

    if (type === "pie") {
      series = chart.series.push(new am4charts.PieSeries())
      series.ticks.template.disabled = true
      series.alignLabels = false
      series.labels.template.text = "[black]{name}" + " " + "[/][black]{value.percent.formatNumber('#.0')}%"
      series.labels.template.radius = am4core.percent(-40)
      series.labels.template.fill = am4core.color("white")

      //Disable click and hover
      let slice = series.slices.template;
      slice.states.getKey("hover").properties.scale = 1;
      slice.states.getKey("active").properties.shiftRadius = 0;
    }

    if (type === "pie") {
      // console.log(this.state.activeIndex)
      series.colors.list = [
        am4core.color(colors.blue),
        am4core.color(colors.yellow),
        am4core.color(colors.green),
        am4core.color(colors.purple)
      ]
      series.dataFields.value = "value"
      series.dataFields.name = "name"
      //series.dataFields.children = "children"
      // series.dataFields.color = "color"
      series.data = this.props.data[this.state.activeIndex]
      series.fontSize = 16
      series.minRadius = 25
      series.maxRadius = 120
    }

    ///////////////////////////////////////////// BAR
    if (type === "bar") {
      chart.data = this.props.data[0]
      chart.strokeWidth = 0
      
      
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = "name"
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = 10;

      //labels styling
      let label = categoryAxis.renderer.labels.template;
      label.wrap = true;
      label.maxWidth = 120;

      // "categoryAxesSettings": {
      //   "minPeriod": "mm",
      //   "autoGridCount": false,
      //   "equalSpacing": true,
      //   "gridCount": 1000,
      //   "labelRotation": 90, //recommended if you have a lot of labels
      //   "axisHeight": 50  //recommended to avoid overlap with the scrollbar
      // },

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.max = this.props.maxValue || 10
      valueAxis.min = 0
      //valueAxis.renderer.grid.template.disabled = true;
      //valueAxis.renderer.labels.template.disabled = true;
      valueAxis.tooltip.disabled = true;

      series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.categoryX = "name"
      series.dataFields.valueY = "value"
      series.columns.template.fill = am4core.color(colors.yellow)
      series.columns.template.strokeWidth = 0

      // If this is the states chart
      if (data.stateId) { 
        //Sort the data
        chart.data.sort(function(a, b) {
          return (b.value - a.value)
        });
        // Change color if the right state is selected
        series.columns.template.adapter.add("fill", function (fill, target) {
          let currentState = target.dataItem.categoryX
          return data.stateId === currentState ? colors.yellow : colors.grey // Yellow / grey
      });

      }

       //Color
       const color = this.props.color
       chart.colors.list = color === "red"
         ? [am4core.color(colors.yellow)]
         :  color === "yellow"
           ? [am4core.color(colors.yellow)]
          : [am4core.color(colors.blue)]
      
      // Alternating colors
      // series.columns.template.adapter.add("fill", function(fill, target) {
      //   let index = target.dataItem.index
      //   return index % 3 === 0 && index !== 2 ? "#F8D807" :
      //   index % 2 === 0 ? '#3ABA89' :
      //   index % 1 === 0 && index !== 2 ? '#AC7EB7' :
      //   null
      // });

      // series.columns.template.stroke = 'red'
      // series.columns.template.fill = am4core.color("yellow")
    }
    
    if (type === "bar-vertical") {
      
      chart.data = this.props.data[0]

      //Sort the data
      chart.data.sort(function(a, b) {
        return (a.value - b.value)
      });

      //Colors
      chart.colors.list = [
        am4core.color(colors.yellow),//yellow
        am4core.color(colors.red),//red
        am4core.color(colors.blue),//blue
        am4core.color(colors.green),//green
        am4core.color(colors.purple)//purple
      ];

      const color = this.props.color
      chart.colors.list = color === "red"
        ? [am4core.color(colors.yellow)]//yellow]
        : color === "yellow"
          ? [am4core.color(colors.yellow)]//yellow
          : [am4core.color(colors.blue)]//blue
      
      //Categories
      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = "name"
      categoryAxis.renderer.inside = true;
      
      // Values
      let valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
      valueAxis.max = this.props.maxValue || 100
      valueAxis.min = 0
      
      valueAxis.renderer.labels.template.disabled = false
      valueAxis.tooltip.disabled = false
      // categoryAxis.renderer.grid.template.disabled = true
      // valueAxis.renderer.grid.template.disabled = true
      
      series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.categoryY = "name"
      series.dataFields.valueX = "value"
      chart.numberFormatter.numberFormat = "#";

      //Cursor
      chart.cursor = this.props.cursor ? new am4charts.XYCursor() : null
    }

    ////////////////////////////////////////////////////////////////////////////////
    if (type === "line") {
      
      chart.data = this.props.data[0]

      //Colors
      const color = this.props.color
      chart.colors.list = color === "red"
        ? [am4core.color("#F8D807")]//yellow]
        : [am4core.color("#009DE0")]//blue
      
      //Categories
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = "name"
      categoryAxis.renderer.inside = true;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = 10;

      //labels styling
      let label = categoryAxis.renderer.labels.template;
      label.wrap = true;
      label.maxWidth = 120;
      
      // Values
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.max = this.props.maxValue || 100
      valueAxis.min = 0
      
      series = chart.series.push(new am4charts.LineSeries())
      series.dataFields.categoryX = "name"
      series.dataFields.valueY = "value"
      chart.numberFormatter.numberFormat = "#";
      valueAxis.renderer.labels.wrap = true
      
      //Cursor
      //chart.cursor = this.props.cursor ? new am4charts.XYCursor() : null
    }

    return [series, chart]
  }

  componentDidMount() {
    let seriesChart = this.createChart(this.props)
    let series = seriesChart[0]
    let chart = seriesChart[1]

    this.setState({
      series,
      chart
    })
  }

  handleLegend = index => {
    this.state.series.data = this.props.data[index]

    this.setState({
      activeIndex: index
    })
  }

  update() {
    let seriesChart = this.createChart(this.props)
    let series = seriesChart[0]
    let chart = seriesChart[1]
    this.setState({
      series,
      chart
    })
  }

  componentDidUpdate(prevProps) {
    this.props.name !== prevProps.name && this.update()
    // this.props.stateId !== prevProps.stateId && this.update()

    if (this.props.stateId !== prevProps.stateId) {
      this.state.series.data = this.props.data[this.state.activeIndex]
    }
  }

  componentWillUnmount() {
    this.state.chart && this.state.chart.dispose()
  }

  render() {


    return (
      <main className="chart-main">

        {/* The Chart element */}
        <div className="all-chart chart" ref={this.chartRef}></div>

        {/* The subset selection */}
        {this.props.legend.length > 1 &&
        <ChartSubsetSelector
          legend={this.props.legend}
          handleLegend={this.handleLegend}
          activeIndex={this.state.activeIndex}
        />}
      </main>
    )
  }
}

export default AllChart
