import React from "react";
import Highcharts from "highcharts";

import type { ChartType, SeriesData } from "../types.ts";

import styles from "./CustomHighChart.module.scss";

interface Props {
  info: {
    chart: ChartType;
    party: string;
    president: string;
  };
  series: SeriesData;
}

export const CustomHighChart = ({ series = [], info }: Props) => {
  const chartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!chartRef.current) return;
    const chart = Highcharts.chart(chartRef.current, { ...info.chart, series });
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
};
