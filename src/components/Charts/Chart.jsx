import React, { Component } from "react"
import BarChart from "./BarChart"
import CircleChart from "./CircleChart"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Chart.scss"
import ChartSelect from "../Shared/ChartSelect"

import { surveyData } from "../../Data/sharedData.js"

class Chart extends Component {
  state = {
    surveyDataIndex:0,
    chartType:'circle'
  }
  componentDidMount() {
    console.log(this.barChartData(this.props.stateId))
    this.setState({
      barChartData:this.barChartData(this.props.stateId)
    })
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.stateId, prevProps.stateId)
    if (this.props.stateId !== prevProps.stateId) {
      this.setState({
        barChartData: this.barChartData(this.props.stateId)
      })
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
  barChartData = stateId => {
    const chartData = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ["#37B98B", "#E5F83C", "#6B9BCA"],
          borderWidth: 1
        }
      ]
    }
    let id = this.state.surveyDataIndex

    chartData.labels = surveyData[id].legend
    chartData.datasets[0].data = surveyData[id].children[0].values[stateId]
    let chartTitle = surveyData[id].name
    // fakeData[0].children.forEach(data => {
    // chartData.labels.push(data.name)
    // chartData.datasets[0].data.push(data.value)
    // })
    return [chartData, chartTitle]
  }
  circleChartData(stateId) {
    let id = this.state.surveyDataIndex

    // console.log(this.state.selectorId)
    let data = surveyData[id]
    return data
  }

  handleChartSelect = (chartType, index) => {
    console.log(index)
    this.setState({
      

      chartType: chartType.substring(0, chartType.length - 1),
      surveyDataIndex:index
    })
  }

  render() {
    let { stateId } = this.props
    let { chartType } = this.state
    let barChartData = this.barChartData(stateId)
    let circleChartData = this.circleChartData(stateId)
    console.log(barChartData[1])

    let renderChart =
      chartType === "bar" ? (
        <BarChart stateId={stateId} data={barChartData[0]} title={barChartData[1]} />
      ) : chartType === "circle" ? (
        <CircleChart
          stateId={stateId}
          legend={circleChartData.legend}
          data={circleChartData}
        />
      ) : null

    console.log("this props", this.props, circleChartData)


    return (
      <>
       
        <div className="chartContainer">
          <i class="fal fa-angle-left" onClick={this.handleChartSelect}></i>
          {renderChart}
          <i class="fal fa-angle-right"></i>
        </div>
        <ChartSelect handleChartSelect={this.handleChartSelect} />

       
      </>
    )
  }
}

export default Chart
