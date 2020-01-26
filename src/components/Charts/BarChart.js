import React, { Component } from "react";
import Chart from "chart.js";
import { render } from "@testing-library/react";
const fakeData = [
  { name: "Voters", amount: 60 },
  { name: "Non-Voters", amount: 50 },
  { name: "18-24", amount: 40 }
];
Chart.defaults.global.defaultFontColor = '#fff';



class BarChart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    // this.getData()
    this.createChart(this.prepareData());
  }
  //  getData() {
  //    fetch('')
  //      .then(response => response.json())
  //      .then(jData => this.prepareData(jData))
  //      .then(data => this.createChart(data))
  //  }
  prepareData(data) {
    const chartData = {
      labels: [],
      datasets: [
        {
          label: "Do you plan on voting in 2020",
          data: [],
          backgroundColor: ["#37B98B", "#E5F83C", "#6B9BCA"],
          borderWidth: 1
        }
      ]
    };

    fakeData.forEach(d => {
      chartData.labels.push(d.name);
      chartData.datasets[0].data.push(d.amount);
    });
    console.log(chartData);
    return chartData;
  }

  createChart(data) {
    const ctx = document.querySelector("#states");
    new Chart(ctx, {
      type: "bar",
      data: data,

      options: {
        responsive: false, 
        legend: {
          display: false,
          labels:{
            fontColor: 'white'
          }
        },

        title: {
          display: true,
          text: "Do you plan on voting in 2020?",
          padding:20,
          fontColor: 'white',
          fontSize: 20,
          // fontFamily: 'anonymous pro',
         
          
        },
        scales: {
          tooltips: {
            displayColors: false
          },
          xAxes: [
            {
             
              ticks:{
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
              display: false,
              ticks: {
                beginAtZero: true,
                display: false, 
                
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
  }

  render() {
    return (
      <>
        <div className="bar-chart">
          <canvas
            id="states"
            className = "chart"
            style={{ height: '85%' }}
          ></canvas>
          <section className="backdrop">
              More Non-Voters in New Hampshire plan to vote compared to the average for swing states.
            </section>
        </div>
      </>
    );
  }
}

export default BarChart;
