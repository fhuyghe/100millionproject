import React, { Component } from "react"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
import ChartSubsetSelector from "./ChartSubsetSelector"
import "./CircleChart.scss"

// am4core.useTheme(dataviz);
am4core.useTheme(am4themes_animated)

class AllChart extends Component {
  state = {
    index: 0,
    activeIndex: 0
  }

  createChart(type) {
    // let { type } = this.props
    console.log(type)
    am4core.useTheme(am4themes_animated)

    let chart =
      type === "circle"
        ? am4core.create(
            "all-chart",
            am4plugins_forceDirected.ForceDirectedTree
          )
        : type === "pie"
        ? am4core.create("all-chart", am4charts.PieChart) :
        type === "bar"
        ? am4core.create("all-chart", am4charts.XYChart)
        : null

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
    //   let chartReg = {}
    //   const createChart = (chartdiv, charttype) => {
    //     console.log(chartdiv)
    //     // Check if the chart instance exists
    //     maybeDisposeChart(chartdiv)

    //     // Create new chart
    //     console.log(chartdiv)
    //     chartReg[chartdiv] = am4core.create(chartdiv, charttype)
    //     return chartReg[chartdiv]
    //   }

    //   const maybeDisposeChart = chartdiv => {
    //     if (chartReg[chartdiv]) {
    //       chartReg[chartdiv].dispose()
    //       delete chartReg[chartdiv]
    //     }
    //   }

    //   let chart = createChart("all-chart", am4charts.PieChart)
      
      series = chart.series.push(new am4charts.PieSeries())
    }
    if (type === "circle" || type === "pie") {
      console.log(this.props.data)
      series.colors.list = [
        am4core.color("#FBD535"),
        am4core.color("#6B9BCA"),
        am4core.color("#37B98B")
      ]
      series.dataFields.value = "value"
      series.dataFields.name = "name"
      series.dataFields.children = "children"
      series.dataFields.color = "color"
      series.data = this.props.data[0]
      series.fontSize = 16
      series.minRadius = 25
      series.maxRadius = 120
    }
    console.log(type)
    if (type === "bar") {
      chart.data = this.props.data[0]
      console.log(this.props.data)
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = "name"

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())

      series = chart.series.push(new am4charts.ColumnSeries())
      // series.name = "Web Traffic"
      series.dataFields.categoryX = "name"
      series.dataFields.valueY = "value"
      console.log(series)
    }

    console.log(series, chart)
    return [series, chart]
  }

  componentDidMount() {
    let seriesChart = this.createChart(this.props.type)
    let series = seriesChart[0]
    let chart = seriesChart[1]
    // Set up data fields

    this.setState({
      series,
      chart
    }) //, title:title
  }

  handleLegend = index => {
    this.setState({
      activeIndex: index
    })
    console.log(this.props.data[index])
    this.state.series.data = this.props.data[index]
  }

  update() {
    console.log("update")
    // this.state.chart.dispose()
    // this.state.series.dispose()
    let seriesChart = this.createChart(this.props.type)
    let series = seriesChart[0]
    let chart = seriesChart[1]
    console.log(series)
    // series.data = this.props.data[this.state.activeIndex]
    // this.state.series.data = this.props.data[this.state.activeIndex]
    // this.componentDidMount()
    //this.state.title.text = this.props.data.name
  }

  componentDidUpdate(prevProps) {
    console.log(this.props, prevProps, this.state)
    // console.log(prevProps.data.name, this.props.data.name)
    // this.state.series && this.state.chart &&

    // let a =
    // this.props.name !== prevProps.name ? this.state.chart.dispose() : null

    let b = this.props.name !== prevProps.name ? this.update() : null
  }

  componentWillUnmount() {
    // this.state.chart.dispose()
  }

  render() {
    // let update = this.state.series && this.state.chart && this.update()
    // this.state.loaded && this.update()

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
