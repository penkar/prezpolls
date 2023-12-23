import React from "react";
import Highcharts from "highcharts";

import type { SeriesData } from "./types.ts";

interface Props {
  series: SeriesData;
  info: any;
}

export function HichChart({ series = [], info = { chart: {} } }: Props) {
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
  }, []);

  return (
    <div id="main">
      <div ref={chartRef}></div>;
    </div>
  );
}
