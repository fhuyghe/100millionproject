import React from "react";
import "./Select.scss";
import "./ChartSelect.scss"
import { surveyData } from "../../Data/sharedData.js"

const ChartSelect = props => {


  return (
    <div className="chart-select">
      {surveyData.map((chartType, index) => {
        return <div key={index} className={index === props.index ? "selector active" : "selector"} onClick={()=>props.handleChartSelect(chartType.type, index)}></div>
      })}
    </div>
  )
}
export default ChartSelect;
