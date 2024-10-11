import React from "react";

import { CustomHighChart } from "./CustomHighChart.tsx";

import type { ChartType, GraphDataPoint, PartyGraphData } from "../types.ts";

interface Props {
  data: PartyGraphData;
  info: {
    party: string;
    president: string;
    chart: ChartType;
  };
}

export function PartyGraph({ data, info }: Props) {
  const [repData, setRepData] = React.useState<GraphDataPoint>([]);
  const [indData, setIndData] = React.useState<GraphDataPoint>([]);
  const [demData, setDemData] = React.useState<GraphDataPoint>([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const republican: GraphDataPoint = [];
    const independent: GraphDataPoint = [];
    const democrat: GraphDataPoint = [];

    for (let i = 0; i < data.length; i++) {
      const { rep, ind, dem, start } = data[i];

      republican.push([start.getTime(), rep]);
      independent.push([start.getTime(), ind]);
      democrat.push([start.getTime(), dem]);
    }
    setRepData(republican);
    setIndData(independent);
    setDemData(democrat);
    setLoaded(true);
  }, [data]);

  const series = [
    {
      data: repData,
      name: `Republican`,
      type: "line",
    },
    {
      data: indData,
      name: `Independent`,
      type: "line",
    },
    {
      data: demData,
      name: `Democrat`,
      type: "line",
    },
  ];

  return (
    loaded && (
      <CustomHighChart series={series} info={info} key={info.president} />
    )
  );
}
