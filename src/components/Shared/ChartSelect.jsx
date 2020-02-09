import React from "react";
import "./Select.scss";
import "./ChartSelect.scss"

const ChartSelect = props => {
  console.log(props)
  const chartTypes = ['Bar', 'Circle', 'Bar', 'Circle', 'Bar', 'Circle', 'Bar', 'Circle']

  return (
    <div className="chart-select">
      {chartTypes.map(chartType => {
        return <div className="selector" onClick={()=>props.handleClick(chartType)}></div>
      })}
    </div>
  )
}
export default ChartSelect;
