import React, { Component } from "react"
import { Select } from "../Shared/Select"
import "./SwingStatesChart.scss"
import Chart from "../Charts/Chart.jsx"
import { swingStates } from "../../Data/sharedData.js"

class SwingStatesChart extends Component {
  constructor() {
    super()
    this.state = {
      stateInfo: {},
      chartType: "bar",
      selectorId: 0,
      onOwnPage: false
    }
  }

  componentDidMount() {
    // Check location if needed
    let url = this.props.location.pathname
    let statePath = url.substring(url.lastIndexOf("/") + 1)

    // If the path matches a state, select it
    let stateSelect = swingStates.filter(state => state.path === statePath)
    let stateInfo = stateSelect[0] ? stateSelect[0] : swingStates[0]

    this.setState({
      stateInfo,
      onOwnPage: stateSelect[0] ? true : false
    })
  }

  handleChange = event => {
    let stateInfo = swingStates.filter(state => {
      return state.abbr === event.target.value
    })

    //Change the URL only if on the swingstates page
    if (this.state.onOwnPage) this.props.history.push(stateInfo[0].path)
    stateInfo = stateInfo[0]
    this.setState({ stateInfo })
  }

  handleChartSelect = chartType => {
    this.setState({
      chartType: chartType.substring(0, chartType.length - 1)
    })
  }

  render() {
    let { stateInfo, chartType } = this.state
    console.log(stateInfo)
    let options = swingStates.map((state, i) => (
      <option key={i} value={state.abbr}>
        {state.name}
      </option>
    ))

    return (
      <div className="swingstates-chart">
        <div className="top">
          <Select
            stateId={stateInfo.abbr}
            stateName={stateInfo.name}
            handleChange={this.handleChange}
            options={options}
          />
        </div>
        {console.log(stateInfo)}
        <Chart stateId={stateInfo.abbr} chartType={chartType} />
      </div>
    )
  }
}

export default SwingStatesChart
