import React from "react";
import Highcharts from "highcharts";

interface Props {
  series: {
    name: string;
    type: string;
    data: number[][];
  }[];
  info: any;
}

export function HC({ series = [], info = { chart: {} } }: Props) {
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

  return <div ref={chartRef}></div>;
}
