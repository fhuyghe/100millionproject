import React, { Component } from "react"
import * as am4core from "@amcharts/amcharts4/core"
// import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
import ChartSubsetSelector from './ChartSubsetSelector'
import "./CircleChart.scss"

// am4core.useTheme(dataviz);
am4core.useTheme(am4themes_animated)

class CircleChart extends Component {
  state = {
    index: 0,
    activeIndex: 0,
   
  }
  componentDidMount() {
    am4core.useTheme(am4themes_animated)

    let chart = am4core.create(
      "circle-chart",
      am4plugins_forceDirected.ForceDirectedTree
    )

    chart.dataFields.color = "color"

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    )
    // Set up data fields
    series.dataFields.value = "value"
    series.dataFields.name = "name"
    series.dataFields.children = "children"
    series.dataFields.color = "color"

    series.colors.list = [
      am4core.color("#FBD535"),
      am4core.color("#6B9BCA"),
      am4core.color("#37B98B"),
      am4core.color("white"),
      am4core.color("green"),
      am4core.color("blue")
    ]

    series.nodes.template.label.text = "[black]{name}[/]"
    series.nodes.template.label.fontFamily = "Anonymous Pro"
    series.nodes.template.label.wrap = false

    series.fontSize = 16
    series.minRadius = 25
    series.maxRadius = 120

    series.data = this.props.data[0]
    this.setState({
      series,
      chart
    }) //, title:title
  }


  handleLegend = (index) => {
    this.setState({
      activeIndex:index,
      
    })
    this.state.series.data = this.props.data[index]
  }

  update() {
    console.log('update')
    this.state.series.data = this.props.data[this.state.activeIndex]
    //this.state.title.text = this.props.data.name
  }

  componentDidUpdate(prevProps){
  // console.log(prevProps.data.name, this.props.data.name)
  // if(this.props.data.name !== prevProps.data.name){
  //   this.state.title.text = this.props.data.name
  // }
  }
  
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
  
  render() {
    let update = this.state.series && this.state.chart && this.update()

    return (
      <main className="chart-main">
        <header>
          <h3>{this.props.name}</h3>
        </header>

        {/* The Chart element */}
        <div className="circle-chart chart"></div>

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

export default CircleChart
