import React from 'react'

const ChartSubsetSelector = (props) => { 
    return <footer className="swing-circle-selectors">
    {props.legend.map((legendName, index) => {
      let active = props.activeIndex === index ? 1 : 0
      let vis = props.activeIndex === index ? "visible" : "hidden"
      return (
        <div className={active === 1 ? "selectors active" : "selectors"} key={index}>
          <div
            className={"arrow-up"}
            style={{
              visibility: `${vis}`
            }}
          ></div>
          <div
            className="selectors-text"
            key={index}
            active={active}
            onClick={() => props.handleLegend(index)}
            name={legendName}
          >
            {legendName}
          </div>
        </div>
      )
    })}
    </footer>
}

export default ChartSubsetSelector