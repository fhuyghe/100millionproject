import React, { Component } from "react"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
import ChartSubsetSelector from './ChartSubsetSelector'
import "./PieChart.scss"

am4core.useTheme(am4themes_animated)

class PieChart extends Component {
  state = {
    index: 0,
    activeIndex: 0
  }

  componentDidMount() {

    let chart = am4core.create("pie-chart", am4charts.PieChart);

    chart.dataFields.color = "color"

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "name";

    // Set up data fields

    console.log(this.props.data)
    chart.data = this.props.data[0]
    this.setState({
      pieSeries,
      chart
    })

    this.chart = chart
  }


  handleLegend = (index) => {
    let newChart = {
      ...this.state.chart,
      data: this.props.data[index]
    }
    this.chart.data= this.props.data[index]
    this.setState({
      activeIndex: index,
      chart: newChart
    })
  }

  update() {
    console.log('update', this.props.data[this.state.activeIndex])
    this.chart.data= this.props.data[this.state.activeIndex]
  }
  
  componentWillUnmount() {
    console.log(this.chart)
    if (this.chart) {
      //this.chart.dispose()
    }
  }
  
  render() {
    console.log(this.props.data)
    let update = this.state.pieSeries && this.state.chart && this.update()

    return (
      <main className="chart-main">
        <header>
          <h3>{this.props.name}</h3>
        </header>

        {/* The Chart element */}
        <div className="pie-chart chart"></div>

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

export default PieChart
