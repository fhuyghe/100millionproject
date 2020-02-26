import React, { Component } from "react"
import Chart from "chart.js"
import "./BarChart.scss"

Chart.defaults.global.defaultFontColor = "#fff"
Chart.plugins.register({
  afterDatasetsDraw: function(chart, easing) {
    var ctx = chart.ctx

    chart.data.datasets.forEach(function(dataset, i) {
      var meta = chart.getDatasetMeta(i)
      if (meta.type === "bubble") {
        meta.data.forEach(function(element, index) {
          // Draw the text in black, with the specified font
          ctx.fillStyle = "rgb(0, 0, 0)"
          var fontSize = 13
          var fontStyle = "normal"
          var fontFamily = "Helvetica Neue"
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily)

          // Make sure alignment settings are correct
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"

          var padding = 15
          var position = element.tooltipPosition()
          ctx.fillText(
            dataset.title,
            position.x,
            position.y - fontSize / 2 - padding
          )
        })
      }
    })
  }
})

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {

    let chart = this.createChart(this.props.data)

    this.setState({
      chart: chart
    })
  }
  update = (chart, id) => {
    chart.update()
  }
  

  updateData = (data) => {
    let { chart }  = this.state
    chart.data = this.props.data
    this.state.chart.update()
  }

 
  createChart(data) {
    const ctx = document.querySelector("#states")
    let barChart = new Chart(ctx, {
      type: "bar",
      data: data,
      
      options: {
        tooltipTemplate: "<%= value %>",

        showTooltips: true,

        onAnimationComplete: function() {
          this.showTooltip(this.datasets[0].points, true)
        },
        tooltipEvents: [],
        responsive: false,
        legend: {
          display: false,
          labels: {
            fontColor: "white"
          }
        },
        scales: {
          tooltips: {
            displayColors: false
          },
          xAxes: [
            {
              display: true,
              ticks: {
                // padding:20
              },
              gridLines: {
                drawBorder: false,
                display: false
              }
            }
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                display: false
              },
              gridLines: {
                drawBorder: false,
                display: false
              }
            }
          ]
        }
      }
    })

    //    Chart.defaults.scale.gridLines.drawOnChartArea = false;
    Chart.defaults.global.maintainAspectRatio = false
    return barChart
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
  render() {
    this.state.chart && this.updateData()
    return (
      <main className="chart-main">
        <header>
          <h3>{this.props.title}</h3>
        </header>
          <canvas
            id="states"
            className="bar-chart chart"
          ></canvas>
        </main>
    )
  }
}

export default BarChart