import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";

export function HC ({series=[], info={chart:{}}}) {
  const chartRef = useRef(null);
  useEffect(() => {
    const chart = Highcharts.chart(chartRef.current, Object.assign({}, info.chart, {series}));
    const resize = () => chart.setSize(window.innerWidth, window.innerHeight - 64);

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  },[]);

  return <div ref={chartRef}></div>;
}
HC.propTypes = {
  series: PropTypes.array,
  info: PropTypes.object,
}
