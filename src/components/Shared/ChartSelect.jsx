import React from "react";
import "./Select.scss";
import "./ChartSelect.scss"
import { surveyData } from "../../Data/sharedData.js"

const ChartSelect = props => {

  const chartTypes = ['Bar', 'Circle', 'Bar', 'Circle', 'Bar', 'Circle', 'Bar', 'Circle']

  return (
    <div className="chart-select">
      {surveyData.map((chartType, index) => {
        return <div key={index} className="selector" onClick={()=>props.handleChartSelect(chartType.type)}></div>
      })}
    </div>
  )
}
export default ChartSelect;
