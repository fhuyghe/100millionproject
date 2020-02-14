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
    console.log('sd')
    let id = this.props.stateId ? this.props.stateId : 0

    am4core.useTheme(am4themes_animated)

    let chart = am4core.create(
      "circle-chart",
      am4plugins_forceDirected.ForceDirectedTree
    )
    chart.background.fill = "#F2705E"

    chart.dataFields.color = "color"

    let title = chart.titles.create()
    title.text = this.props.data.name
    title.fill = "white"
    title.fontSize = 20

    title.wrap = true
    title.textAlign = "middle"
    title.isMeasured = false
    title.y = 20
    title.x = 10
    title.paddingLeft = 30
    title.paddingRight = 30
    title.marginBottom = 50

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
    series.nodes.template.label.wrap = true

    series.fontSize = 14
    series.minRadius = 15
    series.maxRadius = 65

    // series.data = fakeData[id].children[this.state.activeIndex].children;
    series.data = this.props.data.children
    this.setState({ series: series, title:title, chart:chart })
  }


  handleLegend = (legendName, index) => {
    this.setState({
      activeIndex:index,
      
    })
    this.state.series.data = this.props.data.children
  }

  update(){
    
    this.state.series.data = this.props.data.children
    this.state.title.text = this.props.data.name
    

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
    console.log(this.props)
    let update = this.state.series && this.state.chart && this.update()
    // let activeIndex
    return (
      <main className="circle-chart-main">
        <div id="circle-chart"></div>
        <div className="swing-circle-selectors">
          {this.props.data.legend.map((legendName, index) => {
            let active = this.state.activeIndex === index ? 1 : 0
            let bgcolor =
              this.state.activeIndex === index ? "black" : "transparent"
            let vis = this.state.activeIndex === index ? "visible" : "hidden"
            return (
              <div className="selectors" key={index}>
                <div
                  className={"arrow-up"}
                  style={{
                    // background: `${bgcolor}`,
                    visibility: `${vis}`
                  }}
                ></div>
                <div
                  key={index}
                  active={active}
                  style={{
                    background: `${bgcolor}`
                  }}
                  onClick={() => this.handleLegend(legendName, index)}
                  name={legendName}
                >
                  {legendName}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    )
  }
}

export default CircleChart
