import React, { Component } from "react"
import BarChart from "./BarChart"
import CircleChart from "./CircleChart"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { surveyData } from "../../Data/sharedData.js"

class Chart extends Component {
  state = {
    barChartData: null
  }
  componentDidMount() {
    console.log(this.barChartData(this.props.stateId))
    this.setState({
      barChartData: this.barChartData(this.props.stateId)
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
  barChartData = id => {
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
    // console.log(this.props, fakeData[this.props.stateId])
    console.log(id)

    chartData.labels = surveyData[0].legend
    chartData.datasets[0].data = surveyData[0].children[0].values[id]

    // fakeData[0].children.forEach(data => {
    // chartData.labels.push(data.name)
    // chartData.datasets[0].data.push(data.value)
    // })
    return chartData
  }
  circleChartData(id) {
    // console.log(this.state.selectorId)
    let data = surveyData[0]
    return data
  }

  render() {
    let { chartType, stateId } = this.props
    let barChartData = this.barChartData(stateId)
    let circleChartData = this.circleChartData(stateId)

    let renderChart =
      chartType === "bar" ? (
        <BarChart stateId={stateId} data={barChartData} />
      ) : chartType === "circle" ? (
        <CircleChart
          stateId={stateId}
          legend={circleChartData.legend}
          data={circleChartData}
        />
      ) : null

    console.log("this props", this.props, circleChartData)
    // console.log('this state', this.state)
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
        {/* {renderChart} */}
        {/* {this.state.barChartData && (
          <BarChart stateId={this.props.stateId} data={barChartData} />
        )} */}
      </>
    )
  }
}

export default Chart
