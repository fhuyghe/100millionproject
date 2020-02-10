import React, { Component } from "react";
import Chart from "chart.js";
import { fakeData } from "../../Data/sharedData.js";
import "./BarChart.scss"

Chart.defaults.global.defaultFontColor = "#fff";
Chart.plugins.register({
  afterDatasetsDraw: function(chart, easing) {
    var ctx = chart.ctx;

    chart.data.datasets.forEach(function(dataset, i) {
      var meta = chart.getDatasetMeta(i);
      if (meta.type === "bubble") {
        meta.data.forEach(function(element, index) {
          // Draw the text in black, with the specified font
          ctx.fillStyle = "rgb(0, 0, 0)";
          var fontSize = 13;
          var fontStyle = "normal";
          var fontFamily = "Helvetica Neue";
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

          
          // Make sure alignment settings are correct
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          var padding = 15;
          var position = element.tooltipPosition();
          ctx.fillText(
            dataset.title,
            position.x,
            position.y - fontSize / 2 - padding
          );
        });
      } 
    });
  }
});

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let id = this.props.stateId ? this.props.stateId : 0
   
    let chart = this.createChart(this.prepareData(id));
  
    this.setState({
      chart:chart
    })
  }
  update = (chart, id) => {
    chart.data = this.prepareData(id)
    chart.update()

  }
  componentDidUpdate(prevProps){
    
    if(this.state.chart && this.props.stateId !== prevProps.stateId){
      
      this.state.chart.data = this.prepareData(this.props.stateId)
      this.state.chart.update()
    }

  }
  prepareData(id) {
    
    const chartData = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ["#37B98B", "#E5F83C", "#6B9BCA"],
          borderWidth: 1
        }
      ]
    };
   
    fakeData[id].children.forEach(d => {
      chartData.labels.push(d.name);
      chartData.datasets[0].data.push(d.value);
    });

    return chartData;
  }

  createChart(data) {
    const ctx = document.querySelector("#states");
    let barChart = new Chart(ctx, {
      type: 'bar',
      data: data,

      options: {
        tooltipTemplate: "<%= value %>",

        showTooltips: true,

        onAnimationComplete: function() {
          this.showTooltip(this.datasets[0].points, true);
        },
        tooltipEvents: [],
        responsive: false,
        legend: {
          display: false,
          labels: {
            fontColor: "white"
          }
        },

        title: {
          display: true,
          text: "Do you plan on voting in 2020?",
          padding: 20,
          fontColor: "white",
          fontSize: 20
          // fontFamily: 'anonymous pro',
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
    });

   
    //    Chart.defaults.scale.gridLines.drawOnChartArea = false;
    Chart.defaults.global.maintainAspectRatio = false
    return barChart
    
  }
 componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  render() {
    
    return (
      <>
        <main className="bar-chart-main">
          <canvas
            id="states"
            className="bar-chart"
            style={{ height: "75%", width:"90%"}}
          ></canvas>
          <section className="backdrop">
            More Non-Voters in New Hampshire plan to vote compared to the
            average for swing states.
          </section>
        </main>
      </>
    );
  }
}

export default BarChart;

////TEST DATA FOR CHARTJS BUBBLE CHART, NOW USING AMCHART CIRCLE

//   label: [],
//   backgroundColor: "rgba(255,221,50,0.2)",
//   borderColor: "rgba(255,221,50,1)",
//   fontSize:40,
//   fontStyle:'italic',
//   title: "dataTitle1",
//   color: 'green',
//   textsize:40,
//   data: [{
//     x: 21269017,
//     y: 5.245,
//     r: 60
//     }]
// }, {
//   label: [],
//   backgroundColor: "rgba(60,186,159,0.2)",
//   borderColor: "rgba(60,186,159,1)",
//   title: "dataTitle2",
//   fontSize:50,
//   data: [{
//     x: 258702,
//     y: 7.526,
//     r: 10
//   }]
// }, {
//   label: [],
//   backgroundColor: "rgba(0,0,0,0.2)",
//   borderColor: "#000",
//   title: "dataTitle3",
//   data: [{
//     x: 3979083,
//     y: 6.994,
//     r: 15
//   }]
// }, {
//   label: [],
//   backgroundColor: "rgba(193,46,120,0.2)",
//   borderColor: "rgba(193,46,12,1)",
//   title: "dataTitle4",
//   data: [{
//     x: 4931877,
//     y: 5.921,
//     r: 15
//   }]
