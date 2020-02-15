import React, { Component } from "react"
import SwingStatesCharts from "./SwingStatesChart"
import "./SwingStatesPage.scss"

class SwingStatesPage extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div id="swingstatesPage">
          <div className="wrap">
            <div className="top">
                <h1 className="swingstates-chart-title">Swing States</h1>
            </div>
            <SwingStatesCharts {...this.props} />
            </div>
      </div>
    )
  }
}

export default SwingStatesPage
