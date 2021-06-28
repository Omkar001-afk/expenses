import React from "react";
import ChartBar from "../ChartBar/ChartBar.component";

import "./Chart.styles.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax} //maximum spended month calculation
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
