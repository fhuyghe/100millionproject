import React, { Component } from "react"
import { Select } from "../Shared/Select"
import "./SwingStatesChart.scss"
import Chart from "../Charts/Chart.jsx"
import { swingStates } from "../../Data/sharedData.js"

class SwingStatesChart extends Component {
  constructor() {
    super()
    this.state = {
      stateId: "AZ",
      chartType: "bar",
      selectorId: 0
    }
  }
  componentDidMount() {
    let url = this.props.location.pathname
    let statePath = url.substring(url.lastIndexOf("/") + 1)
    let stateAbbr

    swingStates.forEach(state => {
      statePath = state.path === statePath ? state.path : "arizona"
      stateAbbr = state.path === statePath ? state.abbr : "AZ"
    })
    // stateName = swingStates.includes(stateName) ? stateName : "arizona"
    // let stateId = stateName && swingStates.indexOf(statePath)
    // console.log(stateId)
    this.setState({
      stateId: stateAbbr,
      stateName: statePath
    })
  }

  handleChange = event => {
    let id = event.target.value
    console.log(id)
    let statename = swingStates.filter(state => {
      console.log(state.abbr)
      return state.abbr === event.target.value
    })

    this.props.history.push(statename[0].path)

    this.setState({
      stateId: id,
      stateName: swingStates[id]
    })
  }
 
  handleChartSelect = chartType => {
    this.setState({
      chartType: chartType.substring(0, chartType.length - 1)
    })
  }

  render() {
    console.log("this state", this.state)
    let { stateId, stateName, chartType } = this.state

    let options = swingStates.map((state, i) => (
      <option key={i} value={state.abbr}>
        {state.name}
      </option>
    ))

    return (
      <div className="swingstates-chart">
        <main className="swingstates-chart-main">
          <div className="wrap">
          <div className="top">
            <h1 className="swingstates-chart-title">Swing States</h1>

            <Select
              stateId={stateId}
              stateName={stateName}
              handleChange={this.handleChange}
              options={options}
            />
          </div>

            <Chart stateId={stateId} chartType={chartType} />
            </div>
        </main>
      </div>
    )
  }
}

export default SwingStatesChart
