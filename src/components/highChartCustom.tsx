import React from "react";
import Highcharts from "highcharts";
import styles from "./hc.module.scss";

import type { ChartType, SeriesData } from "../types.ts";

interface Props {
  series: SeriesData;
  info: {
    chart: ChartType;
    party: string;
    president: string;
  };
}

function HichChartCustom({ series = [], info }: Props) {
  const chartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!chartRef.current) return;
    const chart = Highcharts.chart(
      chartRef.current,
      Object.assign({}, info.chart, { series })
    );
    const resize = () =>
      chart.setSize(window.innerWidth, window.innerHeight - 64);

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [series, info]);

  return (
    <div className={styles.main}>
      <div ref={chartRef}></div>;
    </div>
  );
}

export default HichChartCustom;
