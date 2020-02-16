import React, { Component } from "react"
import * as am4core from "@amcharts/amcharts4/core"
// import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
// import dataviz from "@amcharts/amcharts4/themes/dataviz.js";
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

    let dataSets = this.formatData(this.props.data.children)

    series.data = dataSets[0]
    this.setState({
      series,
      chart,
      dataSets
    }) //, title:title
  }

  formatData(data) { 
    let dataSets = []

    // Figure out the number of data sets
    const dataSetNumber = this.props.data.legend.length
    
    data.forEach(dataPoint => {
      //Extract one value out of all values
      let values = dataPoint.values[this.props.state] || dataPoint.values.average
      
      //Please each each number in its own array according to the legend
      for (let i = 0; i < dataSetNumber; i++) {
        let newDataPoint = {
          name: dataPoint.name,
          value: values[i] ? values[i] : 0
        }
        dataSets[i]
          ? dataSets[i].push(newDataPoint)
          : dataSets[i] = [newDataPoint]
      }
    });

    return dataSets
  }


  handleLegend = (legendName, index) => {
    this.setState({
      activeIndex:index,
      
    })
    this.state.series.data = this.state.dataSets[index]
  }

  update() {
    let dataSets = this.formatData(this.props.data.children)
    this.state.series.data = dataSets[this.state.activeIndex]
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
          <h3>{this.props.data.name}</h3>
        </header>

        {/* The Chart element */}
        <div className="circle-chart chart"></div>

        {/* The subset selection */}
        <footer className="swing-circle-selectors">
          {this.props.data.legend.map((legendName, index) => {
            let active = this.state.activeIndex === index ? 1 : 0
            let vis = this.state.activeIndex === index ? "visible" : "hidden"
            return (
              <div className={active === 1 ? "selectors active" : "selectors"} key={index}>
                <div
                  className={"arrow-up"}
                  style={{
                    visibility: `${vis}`
                  }}
                ></div>
                <div
                  className="selectors-text"
                  key={index}
                  active={active}
                  onClick={() => this.handleLegend(legendName, index)}
                  name={legendName}
                >
                  {legendName}
                </div>
              </div>
            )
          })}
          </footer>
      </main>
    )
  }
}

export default CircleChart
