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
  state = {
    index: 0,
    activeIndex: 0
  }

  createChart(type) {
    am4core.useTheme(am4themes_animated)
    let chart = am4core.create(
      "all-chart",
      type === "circle"
        ? am4plugins_forceDirected.ForceDirectedTree
        : type === "pie"
        ? am4charts.PieChart
        : type === "bar"
        ? am4charts.XYChart
        : null
    )

    let series
    if (type === "circle") {
      series = chart.series.push(
        new am4plugins_forceDirected.ForceDirectedSeries()
      )
      series.nodes.template.label.text = "[black]{name}[/]"
      series.nodes.template.label.fontFamily = "Anonymous Pro"
      series.nodes.template.label.wrap = false
    }
    if (type === "pie") {
      series = chart.series.push(new am4charts.PieSeries())
    }
    if (type === "circle" || type === "pie") {
      console.log(this.state.activeIndex)
      series.colors.list = [
        am4core.color("#FBD535"),
        am4core.color("#6B9BCA"),
        am4core.color("#37B98B")
      ]
      series.dataFields.value = "value"
      series.dataFields.name = "name"
      series.dataFields.children = "children"
      // series.dataFields.color = "color"
      series.data = this.props.data[this.state.activeIndex]
      series.fontSize = 16
      series.minRadius = 25
      series.maxRadius = 120
    }

    if (type === "bar") {
      chart.data = this.props.data[0]
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = "name"
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      series = chart.series.push(new am4charts.ColumnSeries())
      // series.name = "Web Traffic"
      series.dataFields.categoryX = "name"
      series.dataFields.valueY = "value"
    }

    console.log("create", series, chart)
    return [series, chart]
  }

  componentDidMount() {
    let seriesChart = this.createChart(this.props.type)
    let series = seriesChart[0]
    let chart = seriesChart[1]
   
    this.setState({
      series,
      chart
    }) 
  }

  handleLegend = index => {
    console.log(this.props.data)
    let newChart = {
      ...this.state.series,
      data: this.props.data[index]
    }
    this.state.series.data = this.props.data[index]
  
    this.setState({
      activeIndex: index,
      series: newChart
    })
  }
  update() {
    let seriesChart = this.createChart(this.props.type)
    let series = seriesChart[0]
    let chart = seriesChart[1]
    this.setState({
      series,
      chart
    })
  }

  componentDidUpdate(prevProps) {
    console.log("cdu", this.props, prevProps, this.state)
    this.props.name !== prevProps.name && this.update()
  }

  componentWillUnmount() {
    this.state.chart.dispose()
  }

  render() {
    return (
      <main className="chart-main">
        <header>
          <h3>{this.props.name}</h3>
        </header>

        {/* The Chart element */}
        <div className="all-chart chart"></div>

        {/* The subset selection */}
        <ChartSubsetSelector
          legend={this.props.legend}
          handleLegend={this.handleLegend}
          activeIndex={this.state.activeIndex}
        />
      </main>
    )
  }
}

export default AllChart
